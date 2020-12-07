import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import React from "react";
import Login from "./components/Login";
import AuthService from "./utils/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Main from "./components/Main";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import CreatePost from "./components/CreatePost";
import EditProfile from "./components/EditProfile";

class App extends React.Component {
  state = {
    loggedInUser: null,
  };

  setCurrentUser = (user) => {
    this.setState({
      loggedInUser: user,
    });
  };

  componentDidMount() {
    if (this.state.loggedInUser === null) {
      const authService = new AuthService();
      //Check if the user session is still active on the server

      authService.loggedin().then((response) => {
        if (response.data._id) {
          // there's a user session active then setState with the current User
          this.setCurrentUser(response.data);
          localStorage.setItem("loggedInUser", response.data._id);
        } else {
          //There's no user in session so let's clear the localStorage
          localStorage.removeItem("loggedInUser");
        }
      });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>MiMi</h1>
        <Navbar
          loggedInUser={this.state.loggedInUser}
          setCurrentUser={this.setCurrentUser}
        />

        <Switch>
          <ProtectedRoute
            exact
            path="/main"
            redirect={"/login"}
            render={(props) => <Main />}
          />
          <ProtectedRoute
            exact
            path="/profile"
            redirect={"/login"}
            render={(props) => <Profile />}
          />
          <ProtectedRoute
            path="/profile/:id"
            redirect={"/login"}
            render={(props) => <Profile />}
          />
          <ProtectedRoute
            path="/create-post"
            redirect={"/login"}
            render={(props) => <CreatePost />}
          />

          <ProtectedRoute
            path="/edit-profile"
            redirect={"/login"}
            render={(props) => <EditProfile />}
          />

          <Route path="/signup" component={Signup} />

          <Route
            path="/login"
            render={() => {
              return <Login setCurrentUser={this.setCurrentUser} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
