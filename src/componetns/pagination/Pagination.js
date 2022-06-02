import React, { Component } from 'react'
import styledComponents from 'styled-components';

const Wrapper_pagination = styledComponents.div`

    margin-bottom: 20px;

    .numberPages {
        margin: 0 10px 0px 10px;
    }
`

export default class Pagination extends Component {

    constructor(props) {
        super(props);
    }
    
    

    render() {

        const  getNumberPage = this.props.getNumberPage;

        function getNumber (e) {
            e.preventDefault()
            let num = e.target.textContent;
        }
        return (
        <Wrapper_pagination>
            <a href='#' onClick={getNumber} className='numberPages'>{this.props.count}</a>
        </Wrapper_pagination>
        )
    }
}
