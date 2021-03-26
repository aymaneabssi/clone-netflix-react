import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Header from './components/Header';
import { Form, Container } from 'react-bootstrap';

export default class App extends Component {
  state = {
    query: '',
    movies: [],
  };

  handleInput = (e) => {
    this.setState({ ...this.state, query: e.currentTarget.value });
  };

  handleSubmit = async (e) => {
    e.prevenDefault();
    console.log(e);
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
          console.log(this.state.movies);
        } else {
          console.log('something went wrong');
        }
      });
    } catch (error) {
      console.log(error);
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
              placeholder='Search For Movies'
              value={this.state.query}
            />
          </Form>
        </Container>
        <Home movies={this.state.movies} />
      </>
    );
  }
}
