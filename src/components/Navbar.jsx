import Lottie from "lottie-react";
import logo from "../assets/logo.json"
import { NavLink  } from "react-router-dom";
import "./css/Navbar.css"
import ToggleSwitch from "./ToggleSwitch"
import { useTheme } from "../../themeContext";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
export default function Navbar(){
    const {theme,ToggleTheme} = useTheme();
    //console.log(theme);
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
          <HomeOutlinedIcon/>
          <span>Home</span>
        </NavLink >
      </li>
      <li className="nav-item">
        <NavLink  to="/search" className="nav-link">
          <TravelExploreOutlinedIcon/>
          <span>Search</span>
        </NavLink >
      </li>
      
      <li className="nav-item">
        <NavLink  to="/about" className="nav-link">
          <InfoOutlinedIcon/>
          <span>About</span>
        </NavLink >
      </li>
      <ToggleSwitch onChange={ToggleTheme}
      checked={theme === "dark"}/>
     
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