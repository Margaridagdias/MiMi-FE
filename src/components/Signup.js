import React from "react";
import AuthService from "../utils/auth";
import ProfileService from "../utils/api";
import { Link, withRouter } from "react-router-dom";

class Signup extends React.Component {
  state = {
    username: "",
    password: "",
    email: "",
    name: "",
    file: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const authService = new AuthService();
    const profileService = new ProfileService();
    const uploadData = new FormData();
    uploadData.append("file", this.state.file);
    profileService.uploadFile(uploadData).then((uploadResponse) => {
      authService
        .signup(
          this.state.username,
          this.state.password,
          this.state.email,
          this.state.name,
          uploadResponse.data.fileUrl
        )
        .then(() => {
          this.props.history.push("/main");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  handleFileChange = (event) => {
    this.setState({ file: event.target.files[0] });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label>Password:</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label>Profile picture</label>
          <input type="file" onChange={this.handleFileChange} />
          <input type="submit" value="Signup" />
        </form>
        <p>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}
export default withRouter(Signup);
