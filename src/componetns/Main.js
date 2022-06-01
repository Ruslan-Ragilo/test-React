import React, { Component } from 'react'
import Card from './Card';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    let API_KEY = "66bef919-8103-474b-95f8-d133153f6421"  
    let API_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?100`;
    
    //fetch request
    const fetchMovies = async (url, key) => {
    const getDataFilm = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": key,
        },
      });
      const jsonResponse = await getDataFilm.json();
      const responseFilms = await jsonResponse.films;
      
      
      this.setState({
        isLoaded: true,
        items: responseFilms
      });

      
    };

    fetchMovies(API_URL, API_KEY);
  }

  

  render() {      
  
    const { items , isLoaded } = this.state;
    
    return ( 
      <div>
        <div className='wrapperSearch'>
          <input className='searchInput' type='text' placeholder='Введите название фильма' />
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
