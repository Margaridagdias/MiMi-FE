import React from "react";
import { NavLink } from "react-router-dom";
import AuthService from "../utils/auth";

class Navbar extends React.Component {
  logoutUser = () => {
    const authService = new AuthService();
    authService.logout().then(() => {
      this.props.setCurrentUser(null);
      localStorage.removeItem("loggedInUser");
    });
  };

  render() {
    if (this.props.loggedInUser) {
      return (
        <div className="navbar-top">
        <header>
  <div class="overlay"></div>
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="beyonce.mp4" type="video/mp4" />
  </video>
  <div class="container h-100">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 text-white">
        
        <div className="lead mb-6 width: 50vh"> 
        
        <NavLink activeStyle={{ color: "red" }} exact to="/main">
                  Home
                </NavLink>

                <NavLink activeStyle={{ color: "red" }} exact to="/profile">
                  Profile
                </NavLink>

                <NavLink to="/">
                  <button onClick={this.logoutUser}>Logout</button>
                </NavLink>
                </div>
        
      </div>
    </div>
  </div>
</header>

  </div>
        
      );
    } else {
      return (
        <div>
        <nav>
          <ul>
            <li>
              <NavLink activeStyle={{ color: "red" }} exact to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color: "red" }} exact to="/signup">
                Signup
              </NavLink>
            </li>
          </ul>
        </nav>
        </div>
      );
    }
  }
}
export default Navbar;
