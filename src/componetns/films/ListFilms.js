import React, { Component } from 'react'
import styledComponents from 'styled-components';
import Card from '../card/Card'

const Wrapper_film = styledComponents.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 659px) {
    justify-content: space-around;
  }

  @media screen and (max-width: 447px) {
    justify-content: center;
  }
`

export default class ListFilms extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    
  const listFilms = this.props.items.items || this.props.items.films
        return (<Wrapper_film>
          {
            listFilms.map((el, i) => {
              return <Card data-id={el.filmId} showCardPopup={(this.props.showCardPopup)} name={el.nameRu} rating={el.rating} image={el.posterUrl} filmId={el.filmId} key={el.filmId} year={el.year} />
            })
          }
          </Wrapper_film>)
  }
}
