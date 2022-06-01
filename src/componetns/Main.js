import React, { Component } from 'react'
import Card from './Card';
import { fetchMovies } from './fetch/fetchRequestMovie';
import { addLocalStorage } from './localstorage/addLocalStorageSearch';
import { getLocalStorageSearch } from './localstorage/getLocalStorageSearch';
import { API_URL, API_KEY } from './variable/variable';

export default class Main extends Component {

  constructor(props) {
    const localValue = getLocalStorageSearch();
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      valueSearch: localValue ? localValue : ''
    };
  }
  componentDidMount() {
    fetchMovies(API_URL, API_KEY)
    .then((responseFilms) => {
      this.setState({
        isLoaded: true,
        items: responseFilms,
      });
    }).catch((error) => {
      console.log(error);
    })
  }

  onChangeSearch(e) {
    this.setState({
      valueSearch: e.target.value
    })
    addLocalStorage(e.target.value)
  }
  

  render() {      
  
    const { items , valueSearch } = this.state;
    
    return ( 
      <div>
        <div className='wrapperSearch'>
          <input onChange={(e) => this.onChangeSearch(e)} value={valueSearch} className='searchInput' type='text' placeholder='Введите название фильма' />
        </div>
        <div className='wrapperFilm'>
          {
            items.map(el => {
              return <Card name={el.nameRu} rating={el.rating} image={el.posterUrl} key={el.filmId} year={el.year} />
            })
          }
        </div>
      </div>
    )
    
    
  }
}
