import Login from './Login';
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import PostDetails from "./Home/PostDetails";
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import {
  Grid,
  Button,
  Row,
  Col,
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  NavDropdown
} from 'react-bootstrap';
const posts = [
  {
    id: 1,
    name: 'Honda Accord Crosstour',
    year: '2010',
    model: 'Accord Crosstour',
    make: 'Honda',
    media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
    price: '$16,811'

  },
  {
    id: 2,
    name: 'Honda Accord Crosstour 2',
    year: '2010',
    model: 'Accord Crosstour',
    make: 'Honda',
    media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
    price: '$16,811'

  }
];
class Header extends Component {
  constructor(){
    super();
    this.state = {
      authenticated: false
        //sessionStorage.getItem('api_token')? true : false
    };
    this.onLogin = this.onLogin.bind(this);
  };

  onLogin (loginStatus){
    this.setState({authenticated: loginStatus})
  }

  ComponentWillReceiveProps() {
  let self = this;
  $.ajax({
           type: 'POST',
           url: loginCheck,
           dataType:'json',
           success: function(){
  //JSON.parse(data);
  self.onLogin(true);
  //console.log(data.errors);sss
},
error: function(error){
  if(error.responseJSON) {
    console.log(error.responseJSON);
  }else{
    console.log(error)
    //self.userLogged(true);
  }
}
});
  }
  render(){


    const MyPostPage = (props) => {
      return (
        <PostDetails
          posts={posts}
          {...props}
        />
      );
    };
    const MyLoginPage = (props) => {
      return (
        <Login
          onLogin={this.onLogin}
          {...props}
        />
      );
    };
    return(
    <Router>
      <Grid>
        <Row>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Brand</Link>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">
                  <Link to="/about">About</Link>
                </NavItem>
                <NavItem eventKey={2} href="#">
                  <Link to="/contact">Contact</Link>
                </NavItem>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  {this.state.authenticated ? <Link to="/logout">Logout</Link> : <Link to="/login">Login</Link>}
                  {/*<Link to="/login">Login</Link>*/}
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Row>
        <Route exact path="/" render={() => (
          <Home posts={posts}/>
        )}/>
        <Route path="/post/:id" component={MyPostPage}/>
        <Route path="/about" component={About}/>
        <Route path="/login" component={MyLoginPage}/>
        <Route path="/contact" component={Contact}/>
        {/*<PrivateRoute path="/protected" component={Protected} />*/}
      </Grid>
    </Router>
    )
  }
}
export default Header;