import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

export default class App extends Component {
  state = {
    movies: [],
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
          console.log('resp ok');
          const data = await resp.json();
          console.log(data.Search);
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
        <div>
          <h1>hello</h1>
        </div>
      </>
    );
  }
}
