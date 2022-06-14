import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled  from 'styled-components';
import { addSesionStorage } from '../../sesionstorage/sesionstorage/addSesoinStorage';
import { getSesionStorage } from '../../sesionstorage/sesionstorage/getSesionStorage';

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
        {to: "/about", className: 'linkNav', content: 'About'},
        {to: "/form", className: 'linkNav', content: 'Form'}
      ],
      activeNavLink: getSesionStorage() || 'Main',
    };
  }
  
  render() {

    const { listNavLink , activeNavLink} = this.state;

    const togleActiveLink = (content) => {
      this.setState({
        activeNavLink: content
      })
    }

    addSesionStorage(activeNavLink);

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
