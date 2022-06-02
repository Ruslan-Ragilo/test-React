import './App.css';
import styled from 'styled-components';
import About from './componetns/about/About';
import Main from './componetns/main/Main';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router';
import Header from './componetns/header/Header';
import Form from './componetns/ form/Form';

const  Wrapper_app = styled.div`
  max-width: 900px;
  margin: 0 auto
`

// const styleLink = document.createElement("link");
// styleLink.rel = "stylesheet";
// styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
// document.head.appendChild(styleLink);

export default class App extends Component  {
  render() {
    return (
      <Wrapper_app>
        <Header />
        <div>
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/form' element={<Form />}/>
          </Routes>
        </div>
      </Wrapper_app>
    );
  }
}
