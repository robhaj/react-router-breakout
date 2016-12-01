import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import _ from 'lodash';
const URL = 'http://www.omdbapi.com/';

//components
import NavBar from './NavBar';
import Footer from './Footer';
import Poster from './Poster';

class Main extends Component {
  constructor() {
    super()

    this.state = {
      query: '',
      movies: []
    };

    this.movieSearch =  _.debounce((query) => this.fetchMovies(this.state.query), 500)

  }

  fetchMovies(query) {
    return fetch(`${URL}?s=${query}`)
    .then(res => res.json())
    .then(json => this.setState({ movies: json.Search }))
  }

  onInputChange(query) {
    this.setState({ query });
    this.movieSearch(query)
  }

  render() {
    let movie = this.state.movies[0];
    return (
      <div>
        <NavBar/>
        <input onChange={event => this.onInputChange(event.target.value)} />
        <div className='flex-container'>
          <Poster movie={movie} />
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Main;
