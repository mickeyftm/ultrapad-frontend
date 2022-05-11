import React from 'react';
import "../../assets/css/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from './banner';
import Feature from './feature';
import MultiChainCards from './multiChainCards';
import YourProject from './yourProject';

const landingPage = () => {
  return (
    <>
      <Banner />
      <Feature />
      <MultiChainCards />
      <YourProject />
    </>
  );
};

export default landingPage;
