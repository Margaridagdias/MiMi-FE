import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthService from '../utils/auth';

class Navbar extends React.Component {

    logoutUser = () => {
        const authService = new AuthService();
        authService.logout()
            .then(() => {
                this.props.setCurrentUser(null);
                localStorage.removeItem("loggedInUser");

            })
    }

    render() {
            if (this.props.loggedInUser) {
                return (
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="/">
                                    <button onClick={this.logoutUser}>Logout</button>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeStyle={{color: "red"}} exact to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink activeStyle={{color: "red"}} exact to="/profile">Profile</NavLink>
                               </li>
                            </ul>
                        </nav>
                    </div>
                )
            } else {
                return (
                    <nav>
                        <ul>
                            <li>
                                <NavLink activeStyle={{color: "red"}} exact to="/login">Login</NavLink>
                            </li>
                            <li>
                                <NavLink activeStyle={{color: "red"}} exact to="/signup">Signup</NavLink>
                            </li>
                            <li>
                                <NavLink activeStyle={{color: "red"}} exact to="/profile">Profile</NavLink>
                            </li>
                        </ul>
                    </nav>
                )
            }
        }
    }
export default Navbar;