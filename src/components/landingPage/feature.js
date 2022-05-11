import React from 'react';
import Feature1 from '../../assets/images/feature-1.png';
import Feature2 from '../../assets/images/feature-2.png';
import Feature3 from '../../assets/images/feature-3.png';
import Feature4 from '../../assets/images/feature-4.png';
import Feature5 from '../../assets/images/feature-5.png';
import Feature6 from '../../assets/images/feature-6.png';
import Feature7 from '../../assets/images/feature-7.png';
import Feature8 from '../../assets/images/feature-8.png';
import Slider from "react-slick";

const feature = () => {
    const settings = {
        autoplay: false,
            infinite: true,
            autoplaySpeed: 500,
            button: false,
            arrows: true,
            rows: 2,
            dots:false,
            pauseOnHover: true,
            slidesToShow: 4,
            adaptiveHeight: true,
            slidesToScroll: 1,
            responsive: [{
            breakpoint: 1440,
            settings: {
            slidesToShow: 4
            }
        },{
            breakpoint: 1000,
            settings: {
            slidesToShow: 3,
            }
        }, {
            breakpoint: 700,
            settings: {
            slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            }
        }, {
            breakpoint: 320,
            settings: {
            slidesToShow: 1,
            }
        }]
    }
  return <>
      <section className="feature">
                <div className="container-fluid custom-block">
                     <div className="row">
                        <div className="col-lg-3 mb-lg-0 mb-3 feature-h2"><h2>Featured Platforms</h2></div>
                        <div className="col-lg-9 mb-lg-0 mb-3">
                            <Slider className="feature-carousal" {...settings}>
                                <div className="card mb-3">
                                    <div className="d-flex align-items-center">
                                        <figure className="mb-0 feature-img">
                                            <img className="img-fluid" src={Feature1} alt="Products" />
                                        </figure>
                                        <div><p className="blue-title">NFTPad.fi</p><strong className="d-block feature-price">18.23 x</strong></div>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="d-flex align-items-center">
                                        <figure className="mb-0 feature-img">
                                            <img className="img-fluid" src={Feature2} alt="Products" />
                                        </figure>
                                        <div><p className="blue-title">Babylons</p><strong className="d-block feature-price">15.33 x</strong></div>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="d-flex align-items-center">
                                        <figure className="mb-0 feature-img">
                                            <img className="img-fluid" src={Feature3} alt="Products" />
                                        </figure>
                                        <div><p className="blue-title">Moomonster</p><strong className="d-block feature-price">12.45 x</strong></div>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="d-flex align-items-center">
                                        <figure className="mb-0 feature-img">
                                            <img className="img-fluid" src={Feature4} alt="Products" />
                                        </figure>
                                        <div><p className="blue-title">The Husl</p><strong className="d-block feature-price">18.92 x</strong></div>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="d-flex align-items-center">
                                        <figure className="mb-0 feature-img">
                                            <img className="img-fluid" src={Feature5} alt="Products" />
                                        </figure>
                                        <div><p className="blue-title">QANPlatform</p><strong className="d-block feature-price">18.49 x</strong></div>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="d-flex align-items-center">
                                        <figure className="mb-0 feature-img">
                                            <img className="img-fluid" src={Feature6} alt="Products" />
                                        </figure>
                                        <div><p className="blue-title">Net VRK</p><strong className="d-block feature-price">48.87 x</strong></div>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="d-flex align-items-center">
                                        <figure className="mb-0 feature-img">
                                            <img className="img-fluid" src={Feature6} alt="Products" />
                                        </figure>
                                        <div><p className="blue-title">Continuum World</p><strong className="d-block feature-price">15.70 x</strong></div>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="d-flex align-items-center">
                                        <figure className="mb-0 feature-img">
                                            <img className="img-fluid" src={Feature7} alt="Products" />
                                        </figure>
                                        <div><p className="blue-title">IOEN</p><strong className="d-block feature-price">17.72 x</strong></div>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="d-flex align-items-center">
                                        <figure className="mb-0 feature-img">
                                            <img className="img-fluid" src={Feature8} alt="Products" />
                                        </figure>
                                        <div><p className="blue-title">price</p><strong className="d-block feature-price">17.72 x</strong></div>
                                    </div>
                                </div>
                                <div className="card mb-3">
                                    <div className="d-flex align-items-center">
                                        <figure className="mb-0 feature-img">
                                            <img className="img-fluid" src={Feature5} alt="Products" />
                                        </figure>
                                        <div><p className="blue-title">price</p><strong className="d-block feature-price">17.72 x</strong></div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div> 
                    
                </div>
            </section>
  </>;
};

export default feature;
