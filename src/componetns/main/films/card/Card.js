import React, { Component } from 'react'
import styledComponents from 'styled-components';

const Wrapper_card = styledComponents.div`
margin: 10px;
.imgMovie {
  width: 200px;
  height: 300px;
  transition: .3s;
}

.headerTop {
  position: relative;
  cursor: pointer;
}

.imgMovie:hover {
  opacity: .8;
}

.rating {
  background-color: rgb(67, 67, 104);
  border: 1px solid #444e;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 12px;
  font-weight: bold;
}
.headerBottom {
  width: 200px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 20px;
}
`

export const Name_film = styledComponents.p``;

export default class Card extends Component {

    constructor(props) {
        super(props);
    } 

  render() {
    return (
      <Wrapper_card >
        <div className='headerTop'>
            <img onClick={this.props.showCardPopup} id={this.props.filmId} className='imgMovie' alt={this.props.name} src={this.props.image} />
            <div className='rating'><p>{this.props.rating}</p></div>
        </div>
        <div className='headerBottom'>
            <Name_film className='nameMovie'>{this.props.name}, {this.props.year}</Name_film>
        </div>
      </Wrapper_card>
    )
  }
}
