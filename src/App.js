import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Header from './components/Header';
import { Form, Container, Alert } from 'react-bootstrap';
import Footer from './components/Footer';

export default class App extends Component {
  state = {
    query: '',
    queriedElement: [],
    movies: [],
    queryNotFound: false,
    queryErrorFromApi: '',
  };

  handleInput = (e) => {
    this.setState({
      ...this.state,
      query: e.currentTarget.value,
      queryNotFound: false,
      queryErrorFromApi: '',
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log(this.state.query);
    try {
      const resp = await fetch(
        `http://www.omdbapi.com/?apikey=95717d44&s=${this.state.query
          .toLowerCase()
          .replaceAll(' ', '+')}`
      );
      if (resp.ok) {
        // this api resp always with ok so i have to check data.Response
        console.log('resp ok');
        const data = await resp.json();
        if (data.Response === 'True') {
          // console.log(data);
          // i have data and change state
          this.setState({
            ...this.state,
            queriedElement: data.Search,
            queryNotFound: false,
          });
          console.log('queriedElement:', this.state.queriedElement);
        } else {
          // here i got data.Response = False so cange the state to display allert later
          console.log(data.Error);
          this.setState({
            ...this.state,
            queryNotFound: true,
            queryErrorFromApi: data.Error,
          });
        }
      } else {
        console.log('resp not ok:', resp);
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = async () => {
    // console.log('app mounted');
    const apiKey = '95717d44';
    const movies = ['harry potter', 'the lord of the rings', 'breaking bad'];
    const endpointAllData = `http://www.omdbapi.com/?apikey=${apiKey}&s=`;

    try {
      movies.forEach(async (movie) => {
        const resp = await fetch(endpointAllData + movie.replaceAll(' ', '+'));
        if (resp.ok) {
          // console.log('resp ok');
          const data = await resp.json();
          // console.log(data.Search);
          this.setState({ movies: [...this.state.movies, data.Search] });
          // console.log(this.state.movies);
        } else {
          console.log('something went wrong');
        }
      });
    } catch (error) {
      console.log(error);
      this.setState({
        ...this.state.movies,
        isError: true,
      });
    }
  };

  render() {
    return (
      <>
        <Header />
        <Container fluid>
          <Form onSubmit={this.handleSubmit}>
            <Form.Control
              onChange={this.handleInput}
              className='my-3 '
              type='text'
              placeholder='Search For Movies and Press Enter'
              value={this.state.query}
            />
          </Form>
          {this.state.queryNotFound && (
            <Alert variant='warning'>{this.state.queryErrorFromApi}</Alert>
          )}
        </Container>
        <Home
          movies={this.state.movies}
          queriedMovies={this.state.queriedElement}
        />

        <Footer />
      </>
    );
  }
}
