import React from "react";
import "./Carousel.css";
import img from "./hero.jpg";
function Hero() {
  return (
    <div className="heroo">
      <img src={img} alt=""/>
      <div className="second">
        <p className="para">Coming 6.5</p>
        <h1 className="nikee">ALL COMFORT NO PRESSURE</h1>
        <p className="para">
          We understand if you want to leave home without them{" "}
        </p>
        <button className="btn">Buy It</button>
        <button className="btn">Style It</button>

        <div className="product">
          <div className="pro-first"></div>
          <div className="pro-second"></div>
          <div className="pro-third"></div>
        </div>


{/* 2nd product */}
        <div className="producttt">
          <div className="pro-firstt"></div>
          <div className="pro-secondd"></div>
          <div className="pro-thirdd"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
