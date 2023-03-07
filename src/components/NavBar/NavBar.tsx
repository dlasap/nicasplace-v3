import react from "react";
import "./NavBar.scss";
import img from "../../assets/new.png";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <img src={img} alt="logo" max-height="50px" width="150px" />
      </p>
      <div className="menu">
        <li>Home</li>
        <li>Rooms</li>
        <li>Amenities</li>
        <li id="contact-us">Contact Us</li>
      </div>
    </div>
  );
};

export default NavBar;
