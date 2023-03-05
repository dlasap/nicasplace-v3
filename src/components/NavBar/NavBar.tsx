import react from "react";
import "./NavBar.scss";
const NavBar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">Nica's Place at Horizons 101</p>
      <div className="menu">
        <li>Home</li>
        <li>Rooms</li>
        <li>Ameneties</li>
        <li id="contact-us">Contact Us</li>
      </div>
    </div>
  );
};

export default NavBar;
