import React from 'react';
import About from '../components/About';
import Time from '../components/time';
import Footer from '../components/Footer';
import MapComponent from '../components/MapComponent';
import Testimonials from '../components/TestemonialFooter';

const Home = () => {
  return (
    <div>
      <About />
      <Time />
      <Testimonials />
      <MapComponent />
      <Footer />
    </div>
  );
};

export default Home;
