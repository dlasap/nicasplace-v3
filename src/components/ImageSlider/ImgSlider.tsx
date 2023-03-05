import react from "react";
import "./ImgSlider.scss";
const ImgSlider = () => {
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
            src="https://scontent.fmnl9-2.fna.fbcdn.net/v/t1.6435-9/121994265_4594384273968686_5485147437218446688_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=EtubIl4SXIMAX_H3GSc&_nc_ht=scontent.fmnl9-2.fna&oh=00_AfBRa62xG7iOMB9ZN1HwDl1QKpQX52W5NhDwutzBMSCmkg&oe=642BB54E"
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
      </div>
    </div>
  );
};

export default ImgSlider;
