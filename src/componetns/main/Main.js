import React, { Component } from 'react'
import styledComponents from 'styled-components';
import { fetchMovies } from '../fetch/fetchRequestMovie';
import ListFilms from '../films/ListFilms';
import FilterItems from '../filter/FilterItems';
import { addLocalStorage } from '../localstorage/addLocalStorageSearch';
import { getLocalStorageSearch } from '../localstorage/getLocalStorageSearch';
import Pagination from '../pagination/Pagination';
import PopupCard from '../popupCard/PopupCard';
import SearchInput from '../searchInput/SearchInput';
import Spinner from '../spinner/Spinner';
import {API_KEY } from '../variable/variable';

const Wrapper_pagination = styledComponents.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export default class Main extends Component {
    localValue = getLocalStorageSearch();

    state = {
      error: null,
      isLoaded: false,
      items: null,
      valueSearch: this.localValue ? this.localValue : '',
      countPagesPagination: [1,2,3,4,5,6,7,8,13],
      numberPage: `1`,
      endPointFilms: ``,
      endPointTOP : `top?type=TOP_250_BEST_FILMS&page=`,
      isActivePopup: false,
      idFilms: Number,
      dataPopupFilm: {},
    }

    componentDidMount() {
    if(this.state.endPointTOP) {
      fetchMovies(API_KEY, this.state.endPointTOP, this.state.numberPage)
        .then((responseFilms) => {
          this.setState({
            isLoaded: true,
            items: responseFilms,
          })
        }).catch((error) => {
          this.setState({
            error: true,
          })
          console.log(error);
        })
    }
  }
  getNumberPage = (event) => {
    event.preventDefault()
    this.setState({
      numberPage: event.target.textContent
    })
  }
  showCardPopup = (event) => {
    this.setState({
      isActivePopup: true,
      idFilms: event.target.getAttribute('id'),
      dataPopupFilm: {}
    });
  }
  closePopup = () => {
    this.setState({
      isActivePopup: false,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.state.numberPage !== prevState.numberPage) {
      this.setState({
        isLoaded: false,
      })
      fetchMovies(API_KEY, `${this.state.endPointTOP}${this.state.numberPage}`)
        .then((responseFilms) => {
          this.setState({
            isLoaded: true,
            items: responseFilms,
          })
        }).catch((error) => {
          this.setState({
            error: true,
          })
          console.log(error);
        })
    };
    if( this.state.idFilms !== prevState.idFilms ) {
      fetchMovies(API_KEY, this.state.idFilms)
        .then((responseFilm) => {
          this.setState({
            dataPopupFilm: responseFilm,
          })
        }).catch((error) => {
          this.setState({
            error: true,
          })
          console.log(error);
        })
    }
  }

  render() {  
    console.log(this.state.dataPopupFilm);  
    const { items , valueSearch, countPagesPagination, isLoaded, error, isActivePopup, dataPopupFilm } = this.state;

    const isloadContent = isLoaded ? <ListFilms showCardPopup={this.showCardPopup} items={items} isLoaded={this.isLoaded}/> : <Spinner />;

    const showPopup = isActivePopup ? <PopupCard closePopup={this.closePopup} dataPopupFilm={dataPopupFilm}  /> : null;

    const isloadPagination = isLoaded ? <Wrapper_pagination>

    {
      countPagesPagination.map((el) => {
        return <Pagination key={el} numberPage={this.state.numberPage} getNumberPage={this.getNumberPage} count={el} />
      })
    }

  </Wrapper_pagination> : null;

    const isError = error ? 'ffff' : ''
     return ( 
      <div>
        
        {isError}

        {showPopup}

        <SearchInput onChangeSearch={this.onChangeSearch} valueSearch={valueSearch}/>

        <FilterItems />
        
        {isloadContent}
        
        {isloadPagination}
        
      </div>
    )
    
    
  }
}
