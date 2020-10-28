import React from 'react';
import Header from './start/Header.js'
import Login from './start/Login.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignUp from './start/Signup.js';


// import logo from './logo.svg';
// import './App.css';

function App() {





  return (
    <div>
      
      <Header />

      <BrowserRouter>

        <Switch>


          <Route exact path="/"
          render={(routeProps) => <Login {...routeProps}/>}/>


          <Route exact path="/signup"
          render={(routeProps) => <SignUp {...routeProps}/>}/>

          






        </Switch>
      
      
      
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
