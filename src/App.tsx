import React from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import ImgSlider from "./components/ImageSlider/ImgSlider";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <div className="grid-item navbar">
        <NavBar />
      </div>
      <div className="grid-item body-content">
        <ImgSlider />
      </div>
      <div className="grid-item footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
