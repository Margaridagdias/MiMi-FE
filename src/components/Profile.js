import React from "react";
import ProfileService from "../utils/api";
import { withRouter } from "react-router-dom";
import EditProfile from "./EditProfile";

class Profile extends React.Component {
  state = {
    username: "",
    bio: "",
    image: "",
  };

  componentDidMount() {
    const profileService = new ProfileService();

    profileService.getMyProfile().then((user) => {
      this.setState({
        username: user.data.username,
        image: user.data.imageUrl,
        bio: user.data.bio
        //
      });
    });
  }
  //CLOUDINARYYYYYYYYYYY

  //CLOUDINARYYYYYYYYYYYYYYYYYYYYYY
  render() {
    return (
      <div>
        <div>This is the profile page</div>
        <div>
          <button onClick={() => this.props.history.push(`/edit-profile`)}>
            Edit
          </button>
        </div>

        <h2>user:{this.state.username}</h2>
        <h3>bio: {this.state.bio}</h3>
        <img src={this.state.image} alt="" />

        <div>
          <button onClick={() => this.props.history.push(`/create-post`)}>
            Create New Post
          </button>
        </div>

        <div>
          <audio src="savage.mp3" autoplay controls>
            Error: your web browser does not support this audio player.
          </audio>
          
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);
