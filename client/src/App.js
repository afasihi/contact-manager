import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { IconContext } from "react-icons";

import Navbar from "./Components/layout/Navbar";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import Alerts from "./Components/layout/Alerts";
import PrivateRoute from "./Components/routing/PrivateRoute";
import "./App.css";

import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <AuthState>
        <ContactState>
          <AlertState>
            <BrowserRouter>
              <Fragment>
                <Navbar />
                <div className="container">
                  <Alerts />
                  <Switch>
                    <PrivateRoute exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/Login" component={Login} />
                  </Switch>
                </div>
              </Fragment>
            </BrowserRouter>
          </AlertState>
        </ContactState>
      </AuthState>
    </IconContext.Provider>
  );
}

export default App;
