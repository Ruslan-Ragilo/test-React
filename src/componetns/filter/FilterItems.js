import React, { Component } from 'react'
import styledComponents from 'styled-components'

const Div_W = styledComponents.div`
    a {
        margin-right: 20px;
        transition: .3s;
    }

    a.active {
        color: rgb(241,179,86)
    }
`

export default class FilterItems extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lunkFilter: [
                {content: 'TOP 100'},
                {content: 'Premiers'}
            ],
            text: 'TOP 100',
        }
    }

    toggleClassFilter = (e) => {
        e.preventDefault();
        this.setState({
            text: e.target.textContent 
        })
    }

    render() {
        return (
        <Div_W>
            {this.state.lunkFilter.map(el => {
                return <a href='#' onClick={this.toggleClassFilter} className=
                {this.state.text == el.content ? 'item active' : 'item'}
                    >{el.content}</a>
            })}
        </Div_W>
        )
    }
}
