import React, { Component } from 'react';
import styledComponents from 'styled-components';


const Wrapper_dropdown = styledComponents.div `
    display: flex;
    align-content: start;
    background-color: white;
    padding: 10px 15px;
    cursor: pointer;
    transition: .3s;
    height: 20px;
    visibility: hidden;
    :hover {
        opacity: .7;
    }

    img {
        width: 20px;
        height: 15px;
    }

    p {
        margin: 0 15px;
        color: #000;
        
    }
`

export default class DropdownCustoms  extends Component {
    constructor(props){
        super(props)
    }
  render() {
      
    return (
      <Wrapper_dropdown>
          <img src={this.props.flag} />
          <p>{this.props.text}</p>
      </Wrapper_dropdown>
    )
  }
}
