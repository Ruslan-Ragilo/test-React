import React, { Component } from 'react'
import styledComponents from 'styled-components'

const Wrapper_search = styledComponents.div`
  .searchInput {
    margin-bottom: 40px;
    padding: 10px;
    max-width: 500px;
    width: 100%;
    border-radius: 20px;
    border: none;
    transition: .3s;
  }
  
  .searchInput:hover {
    transform: scale(1.06);
  }

  display: flex;
  justify-content: center;
`

export default class SearchInput extends Component {

  constructor(props) {
      super(props)
  }

  render() {
    return (
        <Wrapper_search>
            <input onChange={(e) => this.props.onChangeSearch} value={this.props.valueSearch} className='searchInput' type='text' placeholder='Введите название фильма' />
        </Wrapper_search>
    )
  }
}
