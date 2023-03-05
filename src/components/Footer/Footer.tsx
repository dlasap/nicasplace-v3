import react from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="sites">
        <ul>
          Booking Sites
          <li className="list-item">
            <a href="">Booking.com</a>
          </li>
          <li className="list-item">
            <a href="">Airbnb</a>
          </li>
          <li className="list-item">
            <a href="">Facebook</a>
          </li>
        </ul>
      </div>
      <div className="logo">Logo</div>
      <div className="contacts">Contacts</div>
    </div>
  );
};

export default Footer;
