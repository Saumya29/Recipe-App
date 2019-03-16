import React, { Component } from 'react';
import RecipeList from './components/RecipeList';
import NavBar from './components/navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <RecipeList />
        </div>
          );
  }
}

export default App;
