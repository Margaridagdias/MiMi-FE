

<div class="card-container">
<div class="card">
    <div class="front">
        <div class="cover">
            <img src="images/rotating_card_thumb3.png"/>
        </div>
        
        <div class="content">
            <div class="main">
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
          </li>
        );
      })
    : null}
              
            </div>


            <div class="footer">
                <div class="rating">
                    <i class="fa fa-mail-forward"></i> +
                </div>
            </div>
        </div>
    </div> 
    
    <!-- end front panel -->

   
    <div class="back">
        <div class="header">
            <h5 class="description">Posts</h5>
            <h3 class="name">{this.state.username}</h3>
            <p class="text-center">{this.state.bio}</p>
        </div>
        <div class="content">
            <div class="main">
                
            <p>{this.state.posts}</p>


                <div class="stats-container">
                    <div class="stats">
                        <h4>235</h4>
                        <p>
                            Followers
                        </p>
                    </div>
                    <div class="stats">
                        <h4>114</h4>
                        <p>
                            Following
                        </p>
                    </div>
                </div>
            </div>
        </div>


        <div class="footer">
            <div class="social-links text-center">
                <a href="https://creative-tim.com" class="facebook"><i class="fa fa-facebook fa-fw"></i></a>
                <a href="https://creative-tim.com" class="twitter"><i class="fa fa-twitter fa-fw"></i></a>
            </div>
        </div>

    </div> <!-- end back panel -->
</div> <!-- end card -->
</div> <!-- end card-container -->