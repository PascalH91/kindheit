import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Signup from "./components/signup/parent/ParentSignup";
import ParentLogin from "./components/login/parent/ParentLogin";
import ChildSignup from "./components/ChildSignup";
import ChildLogin from "./components/ChildLogin";
import Game from "./components/game/Game";
// import GameStart from "./components/Start";
import GameType from "./components/game/GameType";
import GameList from "./components/game/GameList";

import AnimationWindmillSpinning from "./components/lottieAnimations/AnimationWindmillSpinning";

import { childLogin } from "./components/services/auth";
import ParentsBackend from "./components/ParentsBackend";


export default class App extends Component {
  state = {
    user: this.props.user
  };

  setUser = user => {
    this.setState({
      user: user
    });
  };

  render() {
    let pathName = this.props.location.pathname;
    return (
      <div>
        <Navbar
          {...this.props}
          user={this.state.user}
          clearUser={this.setUser}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={props =>
              this.state.user ? (
                <GameType {...props} user={this.state.user} />
              ) : (
                <ChildLogin {...props} setUser={this.setUser} />
              )
            }
          />

          <Route
            exact
            path="/signup"
            render={props => <Signup {...props} setUser={this.setUser} />}
          />
          <Route
            exact
            path="/parentlogin"
            render={props => <ParentLogin {...props} setUser={this.setUser} />}
          />
          <Route
            exact
            path="/childsignup"
            render={props => (
              <ChildSignup
                {...props}
                parentUser={this.state.user}
                setUser={this.setUser}
              />
            )}
          />
          <Route
            exact
            path="/parent"
            render={props => (
              <ParentsBackend
                {...props}
                parentUser={this.state.user}
                setUser={this.setUser}
              />
            )}
          />
          <Route
            exact
            path="/childlogin"
            render={props => <ChildLogin {...props} setUser={this.setUser} />}
          />
          <Route exact path="/play" component={GameType} />
          <Route exact path="/play/:type" component={GameList} />
          <Route
            exact
            path="/play/:type/:gameId"
            render={props => <Game {...props} user={this.state.user} />}
          />
        </Switch>
        {(pathName === "/childlogin" || pathName === "/parentlogin" || pathName === "/signup" || pathName === "/play" || pathName === "/") && (
          <div
            style={{
              position: "absolute",
              zIndex: "-1",
              left: "30px",
              marginTop: "-700px"
            }}
          >
            <AnimationWindmillSpinning />
          </div>
        )}
      </div>
    );
  }
}
