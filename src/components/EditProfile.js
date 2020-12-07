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
    file: ""
    //imageUrl:'',
    //bgMusic: ''
  };

  componentDidMount() {
    const profileService = new ProfileService();
    profileService.getMyProfile().then((response) => {
      this.setState({
        username: response.data.username,
        email: response.data.email,
        name: response.data.name,
        bio: response.data.bio

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
    uploadData.append("file", this.state.file);
    profileService.uploadFile(uploadData).then((uploadResponse) => {
      let updatedProfile = {
        username: this.state.username,
        email: this.state.email,
        name: this.state.name,
        bio: this.state.bio,
        imageUrl: uploadResponse.data.fileUrl
      };
      profileService.editProfile(updatedProfile).then(() => {
        this.props.history.push(`/profile`);
      });
    });
  };


  handleFileChange = (event) => {
    this.setState({ file: event.target.files[0] });
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

        <label>Profile picture</label>
        <input type="file" onChange={this.handleFileChange} />
        {/*
              <label>Background Music</label>
              <audio src="../../public/savage.mp3" autoplay controls>Error: your web browser does not support this audio player.</audio>
 */}

        <button>Save</button>
      </form>
    );
  }
}

export default withRouter(EditProfile);
