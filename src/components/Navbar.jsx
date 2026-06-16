import Lottie from "lottie-react";
import logo from "../assets/logo.json"
import { NavLink  } from "react-router-dom";
import "./css/Navbar.css"
export default function Navbar(){
    return(
        <>
        <nav className="navbar-container">
        <div className="navbar">
        <NavLink  to="/" className="navbar-brand">
       <div className="logo-animation">
    <Lottie animationData={logo} loop={true} />
</div>
        <span className="brand-text">Atmos</span>
        </NavLink >

        <ul className="navbar-nav" id="navbarNav">
      <li className="nav-item">
        <NavLink  to="/" className="nav-link ">
          <svg className="nav-icon" viewBox="0 0 24 24">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9,22 9,12 15,12 15,22"></polyline>
          </svg>
          <span>Home</span>
        </NavLink >
      </li>
      <li className="nav-item">
        <NavLink  to="/search" className="nav-link">
          <svg className="nav-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <span>Search</span>
        </NavLink >
      </li>
      
      <li className="nav-item">
        <NavLink  to="/about" className="nav-link">
          <svg className="nav-icon" viewBox="0 0 24 24">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
            <path d="M16 3h6v4"></path>
            <path d="m22 7-10-4-10 4"></path>
          </svg>
          <span>About</span>
        </NavLink >
      </li>
     
    </ul>

        <button className="mobile-toggle" id="mobileToggle">
        <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
        </button>
        </div>
        </nav>
        </>
    )
}