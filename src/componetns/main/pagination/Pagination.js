import React, { Component } from 'react'
import styledComponents from 'styled-components';

const Wrapper_pagination = styledComponents.div`

    margin-bottom: 20px;

    .numberPages {
        margin: 0 10px 0px 10px;
    }
    .numberPages.active {
        color: yellow;
    }
`

export default class Pagination extends Component {

    state = {
        numberPage: this.props.numberPage
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.numberPage !== this.props.numberPage) {
            this.setState({
                numberPage: this.props.numberPage
            })
        }
    }
    
    
    render() {
        return (
        <Wrapper_pagination>
            <a href='#' onClick={this.props.getNumberPage} className={this.props.numberPage == this.props.count
                ? 'numberPages active' :'numberPages'}>{this.props.count}</a>
        </Wrapper_pagination>
        )
    }
}
