import React from 'react';
import AuthService from '../utils/auth';
import { Link, withRouter } from 'react-router-dom';





class Login extends React.Component {
    state = {
        username: '',
        password:'',
    }


    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };


    handleFormSubmit = (event) => {
        event.preventDefault();
        //const { username, password } = this.state;
        const authService = new AuthService();
        authService.login(this.state.username, this.state.password)
        .then((response) => {

            //Lifting the state up to app.js - 
            //setCurrentUser comes as a prop from app.js
            this.props.setCurrentUser(response.data);
            //Save user id browser local storage
            localStorage.setItem('loggedInUser', response.data._id);
            //LOGGED IN!
            this.props.history.push('/main');
        })
        .catch(() => {
            console.log('Invalid Login')
        })


    }




    render() {
        return(

        <div>
        <div class="sidenav">
         <div class="login-main-text">
            <h2>MiMi</h2>
            <h2>Login Page</h2>
            <p>Login here to access.</p>
         </div>
      </div>

      <div class="main">
         <div class="col-md-6 col-sm-12">
            <div class="login-form">
               <form onSubmit={this.handleFormSubmit} >
                  <div class="form-group">
                     <label>User Name</label>
                     <input type="text" class="form-control" name='username' placeholder="User Name" value={this.state.username} onChange={this.handleChange} required/>
                  </div>
                  
                  <div class="form-group">        
                     <label>Password</label>
                     <input type="password" class="form-control" name='password' placeholder="Password" value={this.state.password} onChange={this.handleChange} required/>
                  </div>
                  <button type="submit" class="btn btn-black">Login</button>
                  
                <p>Don't have account? 
                    <Link to={"/signup"}> Signup</Link>
                </p>
               </form>
            </div>
         </div>
      </div>
      </div>



        )
    }
}

export default withRouter(Login);