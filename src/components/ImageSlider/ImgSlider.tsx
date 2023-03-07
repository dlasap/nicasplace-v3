import react from "react";
import "./ImgSlider.scss";
const ImgSlider = () => {
  // css media query for mobile device
  return (
    <div className="img-slide-container">
      <div className="photo-container">
        <div className="main-photo">
          <img
            className="main"
            alt="img2"
            src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.6435-9/122195773_4603120319761748_5578291735970924875_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=JgJhljtmJjwAX_MWm6a&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfA1_51M6KQPthAk8O5-m__FSzIjEIQKRSuqmj3A4kXdag&oe=642B8582"
          />
        </div>
        <div className="side-photos">
          <img
            className="side"
            alt="img2"
            src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t31.18172-8/28619222_1906907556049718_7946089645866190011_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=VivOGL0-7VoAX-LoHQP&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfCXPGnHGsQ1qzncMwN59mgy3G4xwqjWCo0PM3tf8BdNLQ&oe=642B87D5"
          />
          <img
            className="side"
            alt="img1"
            src="https://scontent.fceb2-1.fna.fbcdn.net/v/t1.6435-9/159887136_5240121999394907_5051421953318392565_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cdbe9c&_nc_eui2=AeF4oNrBmdabNrRRPcsEJQpsvbOkUx0sEo29s6RTHSwSjc_eVa0QGlprRAayIcgy_Nelw_XScXVsDOJJPs5Z4Ekq&_nc_ohc=500upwapWF4AX-mUKqf&_nc_ht=scontent.fceb2-1.fna&oh=00_AfBZ4ix2RYHAlD359TSOwYJU8mb609B_568duntWitwlaw&oe=642D0321"
          />

          <img
            className="side"
            alt="img2"
            src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t31.18172-8/28619222_1906907556049718_7946089645866190011_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=VivOGL0-7VoAX-LoHQP&_nc_ht=scontent.fmnl4-3.fna&oh=00_AfCXPGnHGsQ1qzncMwN59mgy3G4xwqjWCo0PM3tf8BdNLQ&oe=642B87D5"
          />
        </div>
      </div>
      <div className="content">
        <h3>Welcome</h3>
        <p>To</p>
        <h2> Nica's Place</h2>
        <p id="desc">
          Stay-cation? In the heart of Cebu City? AFFORDABLE YET LUXURIOUS?
          <br />
          Indeed! You've come to the right place.
          <br />
          <br /> with over 30 comfortable rooms available.
        </p>
        <div className="buttons">
          <button>ROOMS</button>
          <button>AMENITIES</button>
        </div>
      </div>
    </div>
  );
};

export default ImgSlider;
