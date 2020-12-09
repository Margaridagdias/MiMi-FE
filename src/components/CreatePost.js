import React from "react";
import ProfileService from "../utils/api";
import { withRouter } from "react-router-dom";
import Main from "./Main"


class CreatePost extends React.Component {
  state = {
    file: "",
    description: "",
    bgImage:""
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
       event.preventDefault();
        const profileService = new ProfileService();
        const uploadData = new FormData();
    uploadData.append("file", this.state.file);
        profileService.uploadFile(uploadData)
        .then((imageUrl) => {
          console.log(imageUrl)
            return  profileService.addPost(imageUrl.data.fileUrl, this.state.description, this.props.loggedInUser._id)
            .then(() => {
                this.props.history.push('/main');

            })
     
    });
  }


  handleFileChange = (event) => {
    this.setState({ file: event.target.files[0] });
  };


  
  componentDidMount() {
    const profileService = new ProfileService();
    profileService.getMyProfile().then((user) => {
        console.log(user);
    this.setState({
        bgImage: user.data.thisUser.bgImage,
      });
    });
}



  render() {
    return (
      <div style={{backgroundImage:`url(${this.state.image})`, backgroundSize:"cover",  width:"100%",
      height:"100vh"}}>
        <h2>New Post</h2>
        <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
          <label>New photo</label>
          <input type="file" onChange={this.handleFileChange}/>
          <label>Description</label>
          <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
          <input type="submit"  value="Post" />
        </form>
      </div>
    );
  }
}

export default withRouter(CreatePost);
