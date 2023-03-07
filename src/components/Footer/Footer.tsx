import react from "react";
import "./Footer.scss";
import img from "../../assets/new.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="sites">
        <ul>
          <h5>Booking Sites</h5>
          <li className="list-item">
            <a href="https://www.booking.com/hotel/ph/taft-properties-horizons-101-unit-12a.en-gb.html" target="_blank">
              Booking.com
            </a>
          </li>
          <li className="list-item">
            <a
              href="https://www.agoda.com/nica-s-place-horizons-101-condominium/hotel/cebu-ph.html?finalPriceView=1&isShowMobileAppPrice=false&cid=1891467&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2023-03-17&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=PHP&isFreeOccSearch=false&tag=c3e58422-e15b-3ca2-68ec-03996f19574c&isCityHaveAsq=false&los=1&searchrequestid=42236f96-b42c-4796-8653-1c54ce44220a"
              target="_blank"
            >
              Agoda
            </a>
          </li>
          <li className="list-item">
            <a href="https://www.facebook.com/nicasplace/" target="_blank">
              Facebook
            </a>
          </li>
        </ul>
      </div>
      <div className="logo">
        <img src={img} alt="logo" height={"auto"} width="200px" />
      </div>
      <div className="contacts">
        <h5>Contacts</h5>
        <p>
          Geronica Lasap
          <br />
          +63 917 555 3846
          <br />
          General Maxilom Avenue
          <br />
          6000 Cebu City, Philippines
        </p>
      </div>
      <div className="btm-text">
        <p> Copyright. All rights reserved. 2023. </p>
      </div>
    </div>
  );
};

export default Footer;
