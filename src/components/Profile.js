import React from "react";
import ProfileService from "../utils/api";
import { withRouter } from "react-router-dom";
import EditProfile from "./EditProfile";

class Profile extends React.Component {
  state = {
    username: "",
    description: "",
    image: "",
  };

  componentDidMount() {
    const profileService = new ProfileService();

    profileService.getMyProfile().then((user) => {
      console.log(user);
      console.log("ola");

      this.setState({
        username: user.data.username,
        image: user.data.imageUrl,
        //
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

        <h2>user:{this.state.username}</h2>
        <h3>description: {this.state.description}</h3>
        <img src={this.state.image} />
        <div>
          <button onClick={() => this.props.history.push(`/create-post`)}>
            Create New Post
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Profile);
