import React from "react";
import Img from "/images/photo-grid.png"

export default function Hero() {
  return (
    <section className="hero">

      <img src={Img} className="hero--photo" alt="Photo Grid" />
      <div className="hero-text--container">
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
      </div>
    </section>
  );
}
