// ./components/Home.jsx
import React, { Component } from 'react';
import {
    Button,
    Row,
    Col,
    Panel,
    Form,
    FormControl,
    FormGroup,
    ControlLabel,
} from 'react-bootstrap';
// import {withRouter} from "react-router-dom";
// import fakeAuth from './Common/fakeAuth';



class AddCommentForm extends Component {
    constructor() {
        super();
        this.state = {
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        //event.preventDefault();
        const self = this;
        const data = new FormData(event.target);
        $.ajax({
            type: 'POST',
            url: addComment,
            data: {
                _comment: data.get('comment'),
                _postID: self.props.postID
            },
            success: function(data){
                console.log(data);
            },
            error: function(error){
                // console.log(error);
                if(error.responseJSON) {
                    console.log(error.responseJSON);
                }
            }
        });

    };

    render() {
        return (
            <Row className="addCommentRow">
                <Col sm={8}>
                    <Panel>
                        <Panel.Heading>Dodaj komentarz</Panel.Heading>
                        <Panel.Body>
                            <Form onSubmit={e => {
                                e.preventDefault();
                                this.handleSubmit(e);}}
                            >
                                <FormGroup controlId="formControlsTextarea">
                                    <FormControl componentClass="textarea" name="comment" placeholder="Treść" />
                                </FormGroup>

                                <Col className="text-right" xs={12}>
                                    <Button type="submit">Wyślij</Button>
                                </Col>
                            </Form>
                            {/*<Col className="text-center login-error" xs={12}>*/}
                                {/*<p>error</p>*/}
                            {/*</Col>*/}
                        </Panel.Body>
                    </Panel>
                </Col>
                <Col sm={4}></Col>
            </Row>
        );
    }
}

export default AddCommentForm