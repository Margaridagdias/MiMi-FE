import React from "react";
import ProfileService from "../utils/api";
import { withRouter } from "react-router-dom";
import Profile from "./Profile";

class EditProfile extends React.Component {
  state = {
    username: "",
    email: "",
    name: "",
    bio: "",
    profilePicture: "",
    backgroundImage: "",
    font: "",
  };

  componentDidMount() {
    const profileService = new ProfileService();
    profileService.getMyProfile().then((response) => {
      this.setState({
        username: response.data.username,
        email: response.data.email,
        name: response.data.name,
        bio: response.data.bio,

        //image: response.data.imageUrl,
        // bgMusic: response.data.bgMusic,
      });
    });
  }

  handleChange = (event) => {
    let { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const profileService = new ProfileService();

    const uploadData = new FormData();
    uploadData.append("file", this.state.profilePicture);

    const uploadData2 = new FormData();
    uploadData2.append("file", this.state.backgroundImage);

    profileService.uploadFile(uploadData).then((uploadProfile) => {
      return profileService.uploadFile(uploadData2).then((uploadBackground) => {
        let updatedProfile = {
          username: this.state.username,
          email: this.state.email,
          name: this.state.name,
          bio: this.state.bio,
          imageUrl: uploadProfile.data.fileUrl,
          bgImage: uploadBackground.data.fileUrl,
          font: this.state.font,
        };
        return profileService.editProfile(updatedProfile).then(() => {
          this.props.history.push(`/profile`);
        });
      });
    });
  };

  handleFileChange = (event) => {
    let { name } = event.target;
    this.setState({ [name]: event.target.files[0] });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          onChange={this.handleChange}
          value={this.state.username}
        />

        <label>Email:</label>
        <input
          type="text"
          name="email"
          onChange={this.handleChange}
          value={this.state.email}
        />

        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />

        <label>Bio</label>
        <input
          type="text"
          name="bio"
          onChange={this.handleChange}
          value={this.state.bio}
        />

        <label>Profile Picture</label>
        <input
          type="file"
          name="profilePicture"
          onChange={this.handleFileChange}
        />

        <label>Background Image</label>
        <input
          type="file"
          name="backgroundImage"
          onChange={this.handleFileChange}
        />

        <label>Font</label>
        <select name="font" onChange={this.handleChange}>
          <option value="Segoe UI">Font A</option>
          <option value="Comic Sans MS">Font b</option>
          <option value="Bradley Hand">Font c</option>
        </select>

        <button>Save</button>
      </form>
    );
  }
}

export default withRouter(EditProfile);
