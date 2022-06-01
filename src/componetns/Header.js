import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      listNavLink: [
        {to: "/", className: 'linkNav active', content: 'Main'},
        {to: "/about", className: 'linkNav', content: 'About'}
      ]
    };
  }
  
  render() {

    const { listNavLink } = this.state;

    const togleActiveLink = (e) => {
      
      // if (e.target.classList.contains('active')) {
      //   console.log(e.target)
      //   return null;
      // } else {
      //   listNavLink.map(el => {
      //     if(el.className.indexOf(' active') != -1) {
      //       el.className = el.className.split(' ').shift();
      //       console.log(el.className)
      //     }
      //   })
      //   e.target.classList.add('active');
      // }
    }

    const showLinkNav = listNavLink.map(el => {
      return <Link onClick={togleActiveLink} key={el.content} to={el.to} className={el.className}>{el.content}</Link>
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
