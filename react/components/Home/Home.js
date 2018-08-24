// ./components/Home.jsx
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Car from './Car';

class Home extends Component {
    render(){
        // Get data from route props
        const posts = this.props.posts;
        //Map through cars and return linked cars
        const postNode = posts.map((post) => {
            return (
                <div className="post-div">
                    <Link
                        to={"/"+post.slug}
                        className="list-group-item"
                        key={post.slug}>
                        <div className="post-div-img">
                            <img src={post.image} alt={post.title} />
                        </div>
                        <div class="post-div-title">
                            {post.title}
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