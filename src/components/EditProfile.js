import React from 'react'
import ProfileService from '../utils/api'
import {withRouter} from 'react-router-dom'

class EditProfile extends React.Component {
    state = {
        username: '',
        password: '',
        email: '',
        name:''
    }

    //Component lifecycle method
    //get the id of the project that comes from the url
    //then create an instance of ProfileService
    //and set the state with the project details - getProject(id)
    componentDidMount() {
        const id = this.props.match.params.id;
        const profileService = new ProfileService();
        profileService.getProfile(id)
        .then((response) => {
          this.setState({
              username: response.data.username,
            password: response.data.password,
            email: response.data.email,
            name: response.data.name
          });
        });
      }
    


    handleChange = (event) => {
        let { name, value } = event.target;
  
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const profileService = new ProfileService();
        profileService.updateProfile(this.state)
        .then(() => {
            this.props.history.push(`/profile/${this.state.id}`);
        });
        
      }
    
  
        render() {
            return(
                <form onSubmit={this.handleFormSubmit}>
              <label>Username:</label>
              <input type="text" name="username" onChange={this.handleChange}  value={this.state.username}/>

              <label>Password:</label>
              <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>

              <label>Email:</label>
              <input type="text" name="email" onChange={this.handleChange}  value={this.state.email}/>

              <label>Name:</label>
              <input type="text" name="name" onChange={this.handleChange}  value={this.state.name}/>

              <button>Save</button>
          </form>
      )
  }
}
 
export default withRouter(EditProfile)