import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import  NavLogIn from './NavLogIn'


export default function App() {
  return (
    <Router>
      <div className="app">
          <nav>
          <NavLogIn />
          </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <main>
          <Switch>
            <Route path="/signUp">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>

        <aside>
          <p>Side bar</p>
        </aside>
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function Login() {
//   return <h2>Login</h2>;
// }

// function SingUp() {
//   return <h2>SingUp</h2>;
// }