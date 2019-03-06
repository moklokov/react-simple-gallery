import React, { Component } from 'react';
import Gallery from './components/GalleryContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Simple images gallery</h1>
        </header>
        <div className="App-content">
          <Gallery />
        </div>
      </div>
    );
  }
}

export default App;
