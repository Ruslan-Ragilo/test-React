import './App.css';
import styled from 'styled-components';
import About from './componetns/about/About';
import Main from './componetns/main/Main';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router';
import Header from './componetns/header/Header';

const  Wrapper_app = styled.div`
  max-width: 900px;
  margin: 0 auto
`

export default class App extends Component  {
  render() {
    return (
      <Wrapper_app>
        <Header />
        <div>
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/about' element={<About />}/>
          </Routes>
        </div>
      </Wrapper_app>
    );
  }
}
