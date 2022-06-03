import React, { Component } from 'react'
import styledComponents from 'styled-components'

const Wrapper_drop_active = styledComponents .div`
display:flex;
align-items: center;
height: 15px;
background-color: white;
cursor: pointer;
padding: 10px 15px;
position: relative;

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
}
`

export default class activeCountryItem extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
    <Wrapper_drop_active>
        <img src={this.props.flag} />
        <p>{this.props.text}</p>
    </Wrapper_drop_active>
    )
  }
}
