import React, { Component } from "react";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import axios from "axios";
import './App.css';

// Our Components
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Donate from "./pages/Donate/Donate";
import Questions from "./pages/Questions/Questions";
import Students from "./pages/Students/Students";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import ViewBlog from "./pages/ViewBlog/ViewBlog";
import Curriculum from "./pages/Curriculum/Curriculum";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Login from "./pages/Login/Login";
import Video1 from "./pages/Video1/Video1";
import Video2 from "./pages/Video2/Video2";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/Signup/Signup";
import AppCert from "./pages/Certification/Certification";
import ThankyouApp from "./pages/ThankyouCert/ThankyouCert";
import DomaleOnly from "./pages/DomaleAdmin/DomaleAdmin";

if (localStorage.getItem("id_token")) {
  axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('id_token')}`;
}

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <Navbar/>
            <Wrapper>
              <Route exact={true} path="/" component={Home}/>
              <Route exact={true} path="/home" component={Home}/>
              <Route exact={true} path="/about" component={About}/>
              <Route exact={true} path="/donate" component={Donate}/>
              <Route exact={true} path="/questions" component={Questions}/>
              <Route exact={true} path="/students" component={Students}/>
              <Route exact={true} path="/blog" component={ViewBlog}/>
              <Route exact={true} path="/viewblog" component={Blog}/>
              <Route exact={true} path="/video" component={Video1}/>
              <Route exact={true} path="/video2" component={Video2}/>
              <Route exact={true} path="/contact" component={Contact}/>
              <Route exact={true} path="/login" component={Login}/>
              <Route exact={true} path="/signup" component={Signup}/>
              <Route exact={true} path="/profile/:id" component={Profile}/>
              <Route exact={true} path="/certification" component={AppCert}/>
              <Route exact={true} path="/thankyou" component={ThankyouApp}/>
              <Route exact={true} path="/domaleAdmin" component={DomaleOnly}/>
              <PrivateRoute exact={true} path="/curriculum" component={Curriculum}/>
            </Wrapper>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
