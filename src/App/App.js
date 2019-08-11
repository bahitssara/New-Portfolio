import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import HomePage from '../HomePage/HomePage';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import AboutMe from '../AboutMe/AboutMe';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Route path='/' component={Header} />
        <Route path='/' exact component={HomePage} />
        <Route path='/projects' exact component={Portfolio} />
        <Route path='/about-me' exact component={AboutMe} />
        <Route path='/contact' exact component={Contact} />
      </div>
    );
  }
}

export default App;
