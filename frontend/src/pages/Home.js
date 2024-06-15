import React from 'react';
import About from '../components/About';
import Time from '../components/time';
import Footer from '../components/Footer';
import FormContact from '../components/FormContact';

const Home = () => {
  return (
    <div>
      <About />
      <Time />
      <FormContact />
      <Footer />
    </div>
  );
};

export default Home;
