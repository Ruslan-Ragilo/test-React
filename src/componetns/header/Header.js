import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled  from 'styled-components';

const Wrapper_header = styled.div`
  header {
    margin: 30px 0;
  }

  nav {
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
  }

  .linkNav.active {
    color: rgb(241, 179, 86); 
  }
`



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
      <Wrapper_header>
        <header>
          <nav>
            { showLinkNav }
          </nav>
        </header>
      </Wrapper_header>
    )
  }
}
