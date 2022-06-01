import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      listNavLink: [
        {to: "/", className: 'linkNav', content: 'Main'},
        {to: "/about", className: 'linkNav', content: 'About'}
      ],
      activeNavLink: 'Main'
    };
  }
  
  render() {

    const { listNavLink } = this.state;

    const togleActiveLink = (content) => {
      this.setState({
        activeNavLink: content
      })
    }

    const showLinkNav = listNavLink.map(el => {
      return <Link onClick={() => togleActiveLink(el.content)} 
      key={el.content} to={el.to} 
      className={this.state.activeNavLink === el.content ? el.className + ' active' : el.className + ''}>{el.content}</Link>
    })

    return (
      <div>
        <header>
          <nav>
            { showLinkNav }
          </nav>
        </header>
      </div>
    )
  }
}
