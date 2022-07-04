import React, { Component } from 'react';
import styledComponents from 'styled-components';

const Wrapper_drop = styledComponents.div `
    display:flex;
    align-items: center;
    height: 0px;
    opacity: 0;
    background-color: white;
    cursor: pointer;
    transition: .4s;
    padding: 10px 15px;
    position: relative;
    visibility: hidden;

    &.active {
        visibility: visible;
        height: 15px;
        opacity: 1;
    }
        
    
    

    :hover {
        background-color: gray;
    }

    

    img {
        width: 20px;
        height: 15px;
    }

    p {
        margin: 0 15px;
        color: #000;
    }`


export default class DropdownCustoms  extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <Wrapper_drop onClick={this.props.dropActive} className={this.props.isActiveItem ? 'active' : ''}>
          <img src={this.props.flag} />
          <p>{this.props.text}</p>
      </Wrapper_drop>
    )
  }
}
