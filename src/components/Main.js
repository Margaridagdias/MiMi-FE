import React from "react";
import ProfileService from "../utils/api";

class Main extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    const profileService = new ProfileService();
    profileService.getAllPictures().then((postsFromDb) => {
      this.setState({
        posts: postsFromDb.data,
      });
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>This is the main page</h1>
        </div>
        <div>
          <ul>
            {this.state.posts.length > 0
              ? this.state.posts.map((post, index) => {
                  return (
                    <li key={index}>
                      <img src={post.imageUrl} alt="post" />
                      <p>{post.description}</p>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </div>
    );
  }
}

export default Main;
