import './App.css';
import About from './componetns/About';
import Main from './componetns/Main';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router';
import Header from './componetns/Header';

export default class App extends Component  {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/about' element={<About />}/>
          </Routes>
        </div>
      </div>
    );
  }
}
