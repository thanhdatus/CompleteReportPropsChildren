import React, { Component } from 'react';
import './App.css';
import ReportItem from './components/ReportItem';

class App extends Component {
  constructor() {
    super();
    this.ReportItem = [
      ['Company', 'Contact', 'Country'],
      ['Alfreds Futterkiste', 'Maria Anders', 'Germany'],
      ['Centro comercial Moctezuma', 'Francisco Chang', 'Mexico'],
      ['Ernst Handel', 'Roland Mendel', 'Austria'],
    ];
  }
  render() {
    return (
      <div className='App'>
        <ReportItem cash='1.7M'>54.1% less earnings</ReportItem>
        <ReportItem cash='1.7M'>54.1% less earnings</ReportItem>
        <ReportItem cash='1.7M'>54.1% less earnings</ReportItem>
      </div>
    );
  }
}

export default App;
