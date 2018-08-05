// ./src/car/car-detail.component.jsx
import React, { Component } from 'react';
import {browserHistory} from 'react-router';

class PostDetails extends Component {
  render(){
    // Car array
    const posts = this.props.posts;
    // Car Id from param
    const id = this.props.match.params.id;
    // Filter car with ID
    const post = posts.filter(post => {
      if(post.id == id) {
        return post;
      }
    });

    return (
      <div>
        <h1>{post[0].name}</h1>
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img src={post[0].media} alt={post[0].name} />
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <ul>
              <li><strong>Model</strong>: {post[0].model}</li>
              <li><strong>Make</strong>: {post[0].make}</li>
              <li><strong>Year</strong>: {post[0].year}</li>
              <li><strong>Price</strong>: {post[0].price}</li>
            </ul>
          </div>
        </div>
        <div className="col-md-12">
          <button className="btn btn-default" >Wróć</button>
        </div>
      </div>
    );
  }
}

export default PostDetails