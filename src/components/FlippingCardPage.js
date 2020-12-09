import React from 'react'

  
 export class BlogCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = { flipped: false };
      this.flip = this.flip.bind(this);
    }
  
    flip = () => {
      this.setState({ flipped: !this.state.flipped });
    }
    render() {
        console.log(this.props)
      return (
  
  
        <div onMouseEnter={this.flip} onMouseLeave={this.flip} className={"card-container" + (this.state.flipped ? " flipped" : "")}>
  
          <Front imageUrl={this.props.props.imageUrl}/>
          <Back description={this.props.props.description}/>
        </div>
  
      )
    }
  }
  
  export class Front extends React.Component {
    render() {
        console.log(this.props)
      return (
        <div className="front">
          <ImageArea imageUrl={this.props.imageUrl}/>
          
        </div>
      )
    }
  }
  
  export class Back extends React.Component {
    render() {
      return (
        <div className="back">
          <p>{this.props.description}</p>
        </div>
      )
    }
  }
  
   export class ImageArea extends React.Component {
    render() {
      return (
        <div className="image-container">
          <img className="card-image" src={this.props.imageUrl}></img>
        </div>
      )
    }
  
  }
  
//  export class MainArea extends React.Component {
//     render() {
//       return (
//         <div className="main-area">
//           <div className="blog-post">
//             <p className="date">{new Date().toLocaleDateString()}</p>
//             <p className="blog-content">
//               Some sample text to demonstrate how these cards will work, including how they truncate long sentences.
//               </p>
//             <p className="read-more">Hover to read more...</p>
  
//           </div>
  
//         </div>
//       )
//     }
  //}

