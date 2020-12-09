import React from "react";
import ProfileService from "../utils/api";
import { withRouter } from "react-router-dom";
import EditProfile from "./EditProfile";
import {BlogCard, Front, Back, MainArea, ImageArea} from './FlippingCardPage';

class Profile extends React.Component {
  state = {
    username: "",
    bio: "",
    image: "",
    posts: [],
    bgImage: "",
    font: "",
  };

  componentDidMount() {
    const profileService = new ProfileService();

    profileService.getMyProfile().then((user) => {
      console.log(user);
      this.setState({
        username: user.data.thisUser.username,
        image: user.data.thisUser.imageUrl,
        bio: user.data.thisUser.bio,
        posts: user.data.post,
        bgImage: user.data.thisUser.bgImage,
        font: user.data.thisUser.font,

        //
      });

      document.body.style.fontFamily = this.state.font;
    });
  }
  //CLOUDINARYYYYYYYYYYY

  //CLOUDINARYYYYYYYYYYYYYYYYYYYYYY
  render() {
    return (
      <div>
        {/* <img src={this.state.image} alt="" style={{width:"100%", height:"100vh"}}/> */}

        <div>This is the profile page</div>
        <div>
          <button onClick={() => this.props.history.push(`/edit-profile`)}>
            Edit
          </button>
        </div>

        <div className="Container">
          <img
            src={this.state.image}
            alt=""
            width="100px"
            height="150px"
       
          />
        </div>

        <h2>user:{this.state.username}</h2>
        <h3>bio: {this.state.bio}</h3>
      <div className="container d-flex">
        {this.state.posts.length > 0
              ? this.state.posts.map((post, index) => {
                  return (
                    <BlogCard props={post}/>
                  ) 
                  

                  }
              ) : null
              }
            


</div>

<div>
<footer class="page-footer font-small white">
<button onClick={() => this.props.history.push(`/create-post`)}>
            Create New Post
          </button>
      
        <div>
          <audio src="savage.mp3" autoplay controls>
            Error: your web browser does not support this audio player.
          </audio>
        </div>
  
</footer>
</div>
    </div>
    );
  }
} 

export default withRouter(Profile);
