import React from 'react';
import Navbar from './Navbar';
import Image from "next/image";
import '../app/styles/hero.css';

const Hero = () => {
  return (
    <main className="hero-container">
      <Navbar />
      <section className="hero-section">
        <div className="profile-image-container">
          <div className="profile-image">
            <Image
              src="/hajra.jpg"
              alt="hero"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="title-container">
          <h1 className="hero-title">Software Developer</h1>
          <h2 className="hero-subtitle">
            Hi, I'm <span className="name-highlight" >Hajra Abbas Ali</span>
           
          </h2>
        </div>
      </section>
    </main>
  );
};

export default Hero;
