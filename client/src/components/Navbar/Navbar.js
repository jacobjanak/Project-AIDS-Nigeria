import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import accountlogo from "../../images/accountlogo.jpg";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

class Navbar extends React.Component {
  render() {
    const getNavItemClasses = path => (
      path === window.location.pathname
      ? 'nav-item active'
      : 'nav-item'
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className={getNavItemClasses('/')}>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className={getNavItemClasses('/about')}>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className={getNavItemClasses('/questions')}>
              <Link to="/questions" className="nav-link">
                F.A.Q.
              </Link>
            </li>
            <li className={getNavItemClasses('/donate')}>
              <Link to="/donate" className="nav-link">
                Donate
              </Link>
            </li>
            <li className={getNavItemClasses('/contact')}>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className={getNavItemClasses('/blog')}>
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li className={getNavItemClasses('/curriculum')}>
              <Link to="/curriculum" className="nav-link">
                Curriculum
              </Link>
            </li>
            <li className={getNavItemClasses('/certification')}>
              <Link to="/certification" className="nav-link">
                Get Certified
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className={getNavItemClasses('/login')}>
              <Link to="/login" className="nav-link">
              <i className="fas fa-user accountlogo" title="Log In/Sign Up"></i> Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
