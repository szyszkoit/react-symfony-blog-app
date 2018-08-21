// ./components/Home.jsx
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col
} from 'react-bootstrap';

class CommentList extends Component {
    render(){
        // Get data from route props
        // const posts = this.props.posts;
        // //Map through cars and return linked cars
        // const postNode = posts.map((post) => {
        //     return (
        //         <ListGroup>
        //             <ListGroupItem header="Heading 1">Some body text</ListGroupItem>
        //             <ListGroupItem header="Heading 2" href="#">
        //                 Linked item
        //             </ListGroupItem>
        //             <ListGroupItem header="Heading 3" bsStyle="danger">
        //                 Danger styling
        //             </ListGroupItem>
        //         </ListGroup>
        //     )
        // });
        return (
            <Row className="commentListRow">
                <Col sm={8}>
                <h3>Komentarze</h3>
                <ListGroup>
                    <ListGroupItem header="Heading 1">Some body text</ListGroupItem>
                    <ListGroupItem header="Heading 2" href="#">
                        Linked item
                    </ListGroupItem>
                    <ListGroupItem header="Heading 3" bsStyle="danger">
                        Danger styling
                    </ListGroupItem>
                </ListGroup>
                </Col>
                <Col sm={4}></Col>
            </Row>
        );
    }
}

export default CommentList;