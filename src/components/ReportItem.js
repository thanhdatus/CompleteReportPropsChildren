import React, { Component } from 'react';
import '../App.css';

class ReportItem extends Component {
  render() {
    return (
      <div className='ReportItem'>
        <div></div>
        <div className='content-report'>
          <h4>Cash diposits</h4>
          <h1>{this.props.cash}</h1>
          <p>{this.props.children}</p>
        </div>
      </div>
    );
  }
}

export default ReportItem;
