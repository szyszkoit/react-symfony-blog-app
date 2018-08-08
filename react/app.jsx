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
import Login from './components/Login';
import Home from "./components/Home/Home";
import Header from "./components/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import PostDetails from "./components/Home/PostDetails";

class App extends React.Component {

  constructor() {
    super();
    this.postsLoad = this.postsLoad.bind(this);
    }

  postsLoad() {
    //event.preventDefault();
    const self = this;
    //const data = new FormData(event.target);
    $.ajax({
      type: 'POST',
      url: getPosts,
      // data: {
      //   _username: data.get('username'),
      //   _password: data.get('password')
      // },
      success: function (data) {
        console.log(data);
      },
      error: function (error) {
        // console.log(error);
        if (error.responseJSON) {
          console.log(error.responseJSON);
        }
      }
    });
  }
  componentDidMount(){
    {
    this.postsLoad();
    }
  }
        render() {
          return (
            <Header/>
          )
        }
}
render(<App/>, document.getElementById('app'));
// render((
//     <Router history={browserHistory}>
//         <Route component={App} path="app">
//             <IndexRoute component={Home}/>
//             <Route path="/" component={Home}/>
//             <Route path="/cars" component={Car} data={data}/>
//             <Route path="/cars/:id" component={CarDetails} data={data}/>
//             <Route path="/about" component={About}/>
//             <Route path="/login" component={Login} />
//         </Route>
//     </Router>
// ),document.getElementById('app'));


