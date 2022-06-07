import React, { Component } from 'react'
import styledComponents from 'styled-components';
import Card from '../card/Card';
import { fetchMovies } from '../fetch/fetchRequestMovie';
import { addLocalStorage } from '../localstorage/addLocalStorageSearch';
import { getLocalStorageSearch } from '../localstorage/getLocalStorageSearch';
import Pagination from '../pagination/Pagination';
import SearchInput from '../searchInput/SearchInput';
import {API_KEY } from '../variable/variable';

const Wrapper_film = styledComponents.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Wrapper_pagination = styledComponents.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export default class Main extends Component {

  constructor(props) {
    const localValue = getLocalStorageSearch();
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      valueSearch: localValue ? localValue : '',
      countPagesPagination: [ 1, 2, 3, 4, 5],
      numberPage: 1,
    };
  }

  componentDidMount() {
    fetchMovies(API_KEY, this.state.numberPage)
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
    console.log(this)
    this.setState({
      valueSearch: e.target.value
    })
    addLocalStorage(e.target.value)
  }
  
  getNumberPage(num) {
    console.log(this)
    console.log(num)
    this.setState({
      numberPage: num
    })
    
  }

  render() {      
  
    const { items , valueSearch, countPagesPagination } = this.state;
    
    return ( 
      <div>
        <SearchInput onChangeSearch={this.onChangeSearch} valueSearch={valueSearch}/>
        <Wrapper_film>
          {
            items.map(el => {
              return <Card name={el.nameRu} rating={el.rating} image={el.posterUrl} key={el.filmId} year={el.year} />
            })
          }
        </Wrapper_film>
        <Wrapper_pagination>
          {
            countPagesPagination.map(el => {
              return <Pagination key={el} getNumberPage={this.getNumberPage} count={el} />
            })
          }
        </Wrapper_pagination>
      </div>
    )
    
    
  }
}
