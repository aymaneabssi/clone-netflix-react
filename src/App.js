import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Footer from './components/Footer'
import {Spinner} from 'react-bootstrap'

export default class App extends Component {
  state = {
    movies: [],
    isLoading : false,
    isError : false
  };

  componentDidMount = async () => {
    // console.log('app mounted');
    const apiKey = '95717d44';
    const movies = ['harry potter', 'the lord of the rings', 'breaking bad'];
    const endpointAllData = `http://www.omdbapi.com/?apikey=${apiKey}&s=`;


    try {
      this.setState({
        ...this.state.movies,
        isLoading : true,
      })
      movies.forEach(async (movie) => {
        const resp = await fetch(endpointAllData + movie.replaceAll(' ', '+'));
        if (resp.ok) {
          console.log('resp ok');
          const data = await resp.json();
          console.log(data.Search);
          this.setState({ movies: [...this.state.movies, data.Search] });
          console.log(this.state.movies);
              this.setState({
              ...this.state.movies,
              isLoading : false,
              })
        } else {
          console.log('something went wrong');
          this.setState({
              ...this.state.movies,
              isLoading : false,
              isError : true
          })
        }
      });
    } catch (error) {
      console.log(error);
      this.setState({
        ...this.state.movies,
        isError: true
      })
    }
  };

  render() {
    return (
      
      this.state.isLoading ? 
      <div className="d-flex justifity">
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="light" />
      </div> 
      : <>
        <Home movies={this.state.movies} />
        <Footer /> </>
        
    );
  }
}
