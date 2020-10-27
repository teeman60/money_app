import React from 'react';
import Header from './start/Header.js'
import Login from './start/Login.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


// import logo from './logo.svg';
// import './App.css';

function App() {





  return (
    <div>
      
      <Header />

      <BrowserRouter>

        <Switch>


          <Route exact path="/"
          render={(routeProps) => <Login {...routeProps}/>}>







          </Route>







        </Switch>
      
      
      
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
