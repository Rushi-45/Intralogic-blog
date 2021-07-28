import React, { Component } from 'react';
import Header from '../components/Header';

class Home extends Component {
  render() {
    return (
      <div>
        <Header title='Blog Page' />
        <div className="post-wrapper">
          <p>This is the home page.</p>
        </div>
      </div>
    );
  }
}

export default Home;
