import React from 'react';
import Header from './start/Header.js'
import Login from './start/Login.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignUp from './start/Signup.js';
import NavBar from './start/NavBar.js';
// import Welcome from './components/Welcome.js';


// import logo from './logo.svg';
// import './App.scss';

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

          {/* <Route exact path="/homepage"
          render={(routeProps) => <Welcome {...routeProps}/>}/> */}
          






        </Switch>
      
      
      
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
