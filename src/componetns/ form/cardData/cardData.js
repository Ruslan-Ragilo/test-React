import React, { Component } from 'react';
import styledComponents from 'styled-components';

const Wrapper_card_data = styledComponents.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px auto;
    padding: 20px;
    color: white;
    font-size: 20px;
    border: 2px solid red;
    border-radius: 15px;
    width: 400px;
`

export default class cardData extends Component {
  constructor(props) {
      super(props)
  }


  render() {
      let cardForm = this.props;
    return (
      <Wrapper_card_data>
          <h2>login: {cardForm.login}</h2>
          <p>email: {cardForm.email}</p>
          <p>phone: {cardForm.phone}</p>
          <p>country: {cardForm.country}</p>
          <p>dataBird: {cardForm.dataBird}</p>
          <p>file: {cardForm.file}</p>
          <p>political: {cardForm.political ? 'true': 'false'}</p>
          <p>checkbox: {cardForm.switcher ? 'true': 'false'}</p>
      </Wrapper_card_data>
    )
  }
}
