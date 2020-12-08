import React from "react";
import ProfileService from "../utils/api";

class Main extends React.Component {
  state = {
    posts: [],
    bgImage: "",
    trends: [],
  };

  componentDidMount() {
    const profileService = new ProfileService();
    profileService.getAllPictures().then((postsFromDb) => {
      this.setState({
        posts: postsFromDb.data,
      });
    });

    profileService.getMyProfile().then((user) => {
      console.log(user);
      this.setState({
        bgImage: user.data.thisUser.bgImage,
      });
    });

    profileService.getTrends().then((response) => {
      let trends = response.data.splice(0, 10);
      this.setState({
        trends: trends,
      });
    });
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${this.state.bgImage})`,
          backgroundSize: "cover",
        }}
      >
        <div>
        <h3>Trending on Twitter</h3>
          <ul>
            {this.state.trends.length > 0
              ? this.state.trends.map((trend, index) => {
                  return (
                    <li key={index}>
                      <p>{trend.name}</p>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>

        <div>
          <h1>This is the main page</h1>
        </div>
        <div>
          <ul>
            {this.state.posts.length > 0
              ? this.state.posts.map((post, index) => {
                  return (
                    <li key={index}>
                      <img
                        src={post.imageUrl}
                        alt="post"
                        width="450px"
                        height="600px"
                      />
                      <p>{post.description}</p>
                      <p>{post.username}</p>
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
