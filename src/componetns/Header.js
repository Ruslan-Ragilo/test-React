import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
      </div>
    )
  }
}
