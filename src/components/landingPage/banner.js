import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons' 

const banner = () => {
  return <>
      <section className="hero-banner">
                <div className="container-fluid custom-block">
                    <div className="banner-text">
                        <div className="text-wrapper">
                            <div className="text-wrapper">
                                <span className="banner-span text-uppercase">safest launchpad</span>
                                <h1 className="banner-h1 text-uppercase">multi-chain</h1>
                            </div>
                                <p className="light-p">Launching hand-picked high-quality projects on the Blockchain.</p>
                                <p className="p">Stake TrustPad tokens to get early-access to promising projects.</p>
                        </div>
                        <div className="block-btn text-wrapper">
                            <a className="d-inline shadow-btn text-capitalize" href="http://google.com/">apply as a project</a>
                            <a className="d-inline light-blue-btn text-capitalize" href="http://google.com/">announcements</a>
                            <a className="d-inline blue-outline-btn text-capitalize" href="http://google.com/">telegram</a>
                        </div>
                        <div className="clipboard">
                            <div className="clipboard-flex d-flex align-items-center">
                                <div className="block-btn">
                                    <a className="d-inline blue-outline-btn text-capitalize" href="http://google.com/">live chart</a>
                                    <a className="d-inline blue-outline-btn text-capitalize" href="http://google.com/">Buy <span className="text-uppercase">Spad</span></a>
                                </div>
                                <div className="d-flex">
                                    <span>0xADCFC6bf853a0a8ad7f9Ff4244140D10cf01363C</span>
                                    <FontAwesomeIcon icon={faCopy} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <section className="market-cap">
                <div className="container-fluid custom-block">
                    <div className="market-cap-inner">
                        <ul>
                            <li><strong className="d-block price">$0.91</strong><p className="blue-title mb-0">price</p></li>
                            <li><strong className="d-block price">$0.91</strong><p className="blue-title mb-0">Market Cap (87.44M Supply)</p></li>
                            <li><strong className="d-block price">$0.91</strong><p className="blue-title mb-0">TVL</p></li>
                            <li><strong className="d-block price">$0.91</strong><p className="blue-title mb-0">Raised in 103 projects</p></li>
                        </ul>
                    </div>
                </div>
            </section>
            </section>
  </>;
};

export default banner;
