import React, { Component } from 'react'
import styledComponents from 'styled-components';
import { Name_film } from '../films/card/Card';

const Wrapper_popup_card = styledComponents.div `
    height: 100vh;
    width: 100vw;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 333;

    &::before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        background-color: black;
        opacity: .5;
        z-index: 11;
    }
`

const Wrapper_show_card = styledComponents.div `
    margin: 20px 0;
    padding: 20px;
    border-radius: 10px;
    background-color: white;
    z-index: 333;
    display: flex;
    align-items: start;
    max-width: 800px;
`

const Poster = styledComponents.img `
    width: 300px;
`

const Wrapper_description = styledComponents.div `
    margin-left: 30px;
    p {
      color: black;
    }
`

const Name_Ru = styledComponents.p `
    color: black;
    position: relative;
    


    .close {
      position: absolute;
      color: black;
      right: 0;
      top: -20px;
      margin: 0;
      cursor: pointer;
      font-weight: bold;
    }
`

export default class PopupCard extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    const {nameRu, description, posterUrl, ratingImdb, year} = this.props.dataPopupFilm;
    return (
      <Wrapper_popup_card>
        <Wrapper_show_card>
            <Poster src={posterUrl}></Poster>
            <Wrapper_description>
              <Name_Ru><p onClick={this.props.closePopup} className='close'>X</p>{nameRu}, {year}, {ratingImdb}
              </Name_Ru>
              <p>{description}</p>
            </Wrapper_description>
        </Wrapper_show_card>  
      </Wrapper_popup_card>
    )
  }
}
