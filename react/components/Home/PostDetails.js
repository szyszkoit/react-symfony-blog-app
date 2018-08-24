// ./src/car/car-detail.component.jsx
import React, { Component, PureComponent } from 'react';
import {Link} from 'react-router-dom';
import AddCommentForm from '../Comments/AddCommentForm';
import CommentList from "../Comments/CommentList";

class PostDetails extends PureComponent {

  componentDidMount() {

  };
  render(){
    if(this.props.posts.length > 0) {
      var parts = window.location.href.split('/');
      var answer = parts[parts.length - 1];

      const posts = this.props.posts;
      //console.log(posts);
      // Car Id from param
      const slug = answer;
      // Filter car with ID
      var post = posts.filter(post => {
        if (post.slug == slug) {
          return post;
        }
      });
    }
    if(this.props.posts.length == 0){
      return(
        <div></div>
      );
    }else {

      return (
        <div>
          <h1>{post[0].title}</h1>
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img src={post[0].image} alt={post[0].title}/>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <p>{post[0].description}</p>
            </div>
          </div>
          <div className="row">
            <CommentList/>
          </div>
          <div className="row">
            <AddCommentForm postID={post[0].id}/>
          </div>
          <div className="col-md-12">
            <Link to="/">
              <button className="btn btn-default">Wróć</button>
            </Link>

          </div>
        </div>

      )
    }
  }
}

export default PostDetails