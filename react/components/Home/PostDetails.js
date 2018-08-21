// ./src/car/car-detail.component.jsx
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AddCommentForm from '../Comments/AddCommentForm';
import CommentList from "../Comments/CommentList";

class PostDetails extends Component {
    componentWillMount(){
        {
            var self = this;
            $.ajax({
                type: 'POST',
                url: '/getdata' + window.location.pathname,
                // data: {
                //   _username: data.get('username'),
                //   _password: data.get('password')
                // },
                success: function (data) {
                    console.log(JSON.parse(data));
                    data = JSON.parse(data);
                    this.props.posts = data[0];
                },
                error: function (error) {
                    // console.log(error);
                    if (error.responseJSON) {
                        console.log(error.responseJSON);
                    }
                }
            });
        }
    }
  render(){
    // Car array

      console.log('props: '+ this.props.posts);
    const posts = this.props.posts;
    //console.log(posts);
    // Car Id from param
    const slug = this.props.match.params.slug;
    // Filter car with ID
    const post = posts.filter(post => {
      if(post.slug == slug) {
        return post;
      }
    });

    return (
      <div>
        <h1>{post[0].title}</h1>
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img src={post[0].image} alt={post[0].title} />
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
            <Link to="/"><button className="btn btn-default" >Wróć</button></Link>

        </div>
      </div>
    );
  }
}

export default PostDetails