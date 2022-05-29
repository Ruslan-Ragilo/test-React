import React, { Component } from 'react'

export default class Card extends Component {

    constructor(props) {
        super(props);
    } 

  render() {
    return (
      <div className='card'>
        <div className='headerTop'>
            <img className='imgMovie' alt={this.props.name} src={this.props.image} />
            <div className='rating'><p>{this.props.rating}</p></div>
        </div>
        <div className='headerBottom'>
            <p className='nameMovie'>{this.props.name}, {this.props.year}</p>
        </div>
      </div>
    )
  }
}
