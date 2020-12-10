import React from "react";
import ProfileService from "../utils/api";

class Main extends React.Component {
  state = {
    posts: [],
    bgImage: "",
    trends: [],
    username: ""
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
        username:user.data.thisUser.username
      });
    });

    profileService.getTrends().then((response) => {
       let trends = response.data.splice(0, 10);
      console.log(response.data)
       this.setState({
         trends: trends,
       });
    });
  }

  render() {
    return (
      <div>
        <div>
        <h3>Trending on Twitter</h3>
        <div class="tcontainer"><div class="ticker-wrap"><div class="ticker-move">
  <div class="ticker-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
  <div class="ticker-item">Aliquam consequat varius consequat.</div>
  <div class="ticker-item">Fusce dapibus turpis vel nisi malesuada sollicitudin.</div>
  <div class="ticker-item">Pellentesque auctor molestie orci ut blandit.</div>
</div></div></div>
  
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
       

        <div class="row">
            <div className="container d-flex flex-wrap">
            {this.state.posts.length > 0
              ? this.state.posts.map((post, index) => {
                  return (
                   
                      <div class="card-box col-md-5 col-sm-12">
                <div class="card card-with-border" data-background="image" data-src={post.imageUrl}>
                <img className="image-card"
                        src={post.imageUrl}
                        alt="post"
                        width="150px"
                        height="550px"
                      />

                    <div class="content text-center">
                        <p class="description">{post.description}</p>
                    </div>
                    </div>
                    </div>
                  
                 
                  );
                })
              : null}
         </div>
         </div>


        <div class="page-description-footer">

<p>Copyright &copy; 2020 <a href="github.com/margaridagdias">Margarida Dias</a>, made with <i class="fa fa-heart ct-heart"></i> for a better web.</p>
</div>

<script src="assets/js/jquery-1.10.2.js" type="text/javascript"></script>
<script src="assets/js/bootstrap.min.js" type="text/javascript"></script>
<script src="assets/js/hipster-cards.js"></script>

</div>

    );
  }
}

export default Main;
