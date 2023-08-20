import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImgNew from '../components/HeroImgNew';
import '../components/About.css'
import { Link } from 'react-router-dom';

const About = () => {
  const intro = {
    heading: 'ABOUT.',
    text: 'Hello! My name is Mudavath Raju, and I am a passionate React Developer.',
  };

  return (
    <>
      <Navbar />
      <HeroImgNew {...intro} />
      <section className="about-section">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I am a dedicated React developer with a strong enthusiasm for creating
            efficient and user-friendly web applications. My journey in the world of
            development began with curiosity, and since then, I've been constantly
            exploring and enhancing my skills.
          </p>
          <p>
            With a keen eye for detail and a passion for clean and elegant code, I strive
            to build engaging and responsive interfaces. My goal is to contribute to the
            development of innovative solutions that make a positive impact.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, reading
            about the latest web development trends, or enjoying the outdoors.
          </p>
          <p>Feel free to reach out and connect with me. Let's create something amazing!</p>

          <Link to='/contact' className='btn'>Contact</Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
