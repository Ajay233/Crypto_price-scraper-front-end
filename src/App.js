import React from 'react';
import { Router, Route } from 'react-router-dom'
import NavBar from './navBar/navBar'
import Home from './home/home'
import Tickers from './tickers/tickers'
import NewTicker from './tickers/newTicker'
import history from './history'

import './stylesheets/main.css'
import './stylesheets/chart.css'
import './stylesheets/newTicker.css'
import './stylesheets/priceData.css'

class App extends React.Component {
  render(){
    return(
      <React.Fragment>
        <Router history={history}>
          <NavBar />
          <Route exact path="/" render={() => <Home />} />
          <Route path="/tickers" render={() => <Tickers />} />
          <Route path="/newTicker" render={() => <NewTicker />} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
