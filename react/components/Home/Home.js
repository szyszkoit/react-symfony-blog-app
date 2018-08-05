// ./components/Home.jsx
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Car from './Car';

class Home extends Component {
    render(){
        console.log(this.props);
        // Get data from route props
        const posts = this.props.posts;
        //Map through cars and return linked cars
        const postNode = posts.map((post) => {
            return (
                <div className="post-div">
                    <Link
                        to={"/post/"+post.id}
                        className="list-group-item"
                        key={post.id}>
                        <div className="post-div-img">
                            <img src={post.media} alt={post.name} />
                        </div>
                        <div class="post-div-title">
                            {post.name}
                        </div>
                    </Link>
                </div>
            )
        });
        return (
            <div>
                <h1>Posts page</h1>
                <div className="post-container">
                    {postNode}
                </div>
            </div>
        );
    }
}

export default Home;