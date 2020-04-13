import React, {Component} from 'react';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import classes from './App.module.css';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Header/>
          <Switch>
            <Redirect from="/" to="/home"/>
          </Switch>
        </div>
      </BrowserRouter>
      
    )
  }
}

export default App;
