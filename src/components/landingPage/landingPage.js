import React from 'react';
import "../../assets/css/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from './banner';
// import Feature from './feature';
import MultiChainCards from './multiChainCards';
import YourProject from './yourProject';
import FaqsInfo from '../FaqsPage/FaqsInfo';
import Footer from "../../../src/components/footer"
const LandingPage = () => {
  console.log("i am in landing page")
  return (
    <>
      <Banner />
      {/* <Feature /> */}
      <MultiChainCards />
      <FaqsInfo/>
      <YourProject />
      <Footer/>
      
    </>
  );
};

export default LandingPage;
