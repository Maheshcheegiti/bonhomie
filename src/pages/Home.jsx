import React from "react";
import HeroSection from "../assets/images/HeroImage.png";

export default function Home() {
  return (
    <div className="home">
      <div className="hero-section">
        <img src={HeroSection} alt="Hero Section" />
      </div>
    </div>
  );
}
