import React from 'react';
import "../../assets/css/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from './banner';
// import Feature from './feature';
import MultiChainCards from './multiChainCards';
import YourProject from './yourProject';
import FaqsInfo from '../FaqsPage/FaqsInfo';

const LandingPage = () => {
  console.log("i am in landing page")
  return (
    <>
      <Banner />
      {/* <Feature /> */}
      <MultiChainCards />
      <FaqsInfo/>
      <YourProject />
    </>
  );
};

export default LandingPage;
