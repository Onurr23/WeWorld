import React, { Component } from 'react'
import {Switch,Route} from "react-router-dom";
import Home from "./Components/Main/Home";
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import Users from "./Components/Main/Users";
import Matched from "./Components/Main/Matched";
import Profile from "./Components/Main/Profile";
import UpdateUser from "./Components/Actions/UpdateUser";
import SendMessage from "./Components/Actions/SendMessage";


export default class App extends Component {
  render() {
    return (
      <div>

        <Switch>

        <Route exact path="/" component={SignIn} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/matched" component={Matched} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/edit" component={UpdateUser} />
        <Route exact path="/chat" component={SendMessage}/>

        </Switch>

      </div>
    )
  }
}

