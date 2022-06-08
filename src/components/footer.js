import React from 'react';
import FooterIcon1 from '../assets/images/footer-icon1.png';
import FooterIcon2 from '../assets/images/footer-icon2.png';
import FooterIcon3 from '../assets/images/footer-icon3.png';
import FooterIcon4 from '../assets/images/footer-icon4.png';
import FooterIcon5 from '../assets/images/footer-icon5.png';
import Logo from '../assets/images/logo.svg';
// import Quill from '../assets/images/quill-audits.png';
// import Certick from '../assets/images/certick.png';

const footer = () => {
  return <>
      <footer>
            <div className="footer-header">
                <div className="container-fluid custom-block">
                    <div className="row">
                        <div className="col-lg-6 mb-lg-0 mb-4">
                            <figure className="footer-mb footer-logo">
                                <img  src={Logo} alt="sitelogo" className="img-fluid" />
                            </figure>
                            <p  className="footer-mb">UltraPad Finance is a decentralized multi-chain fundraising platform enabling projects to raise capital and promise safety to early stage investors. UltraPad Finance tokens to get priority-access to promising projects.</p>
                            <ul className="social-icons">
                                <li><a href="https://ultrapad.finance.server18.arhamsoft.info/"><img  alt='Gammes' src={FooterIcon1} /></a></li>
                                <li><a href="https://ultrapad.finance.server18.arhamsoft.info/"><img  alt='Gammes' src={FooterIcon2} /></a></li>
                                <li><a href="https://ultrapad.finance.server18.arhamsoft.info/"><img  alt='Gammes' src={FooterIcon3} /></a></li>
                                <li><a href="https://ultrapad.finance.server18.arhamsoft.info/"><img  alt='Gammes' src={FooterIcon4} /></a></li>
                                <li><a href="https://ultrapad.finance.server18.arhamsoft.info/"><img  alt='Gammes' src={FooterIcon5} /></a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 mb-lg-0 mb-3">
                            <h3 className="footer-mb text-capitalize">general</h3>
                            <ul className="footer-links">
                                <li><a href="https://ultrapad.finance.server18.arhamsoft.info/">How to participate in IDO</a></li>
                                <li><a href="https://ultrapad.finance.server18.arhamsoft.info/">FAQ</a></li>
                                <li><a href={process.env.REACT_APP_Web_link}>Apply for IDO</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 mb-lg-0 mb-3">
                            <h3 className="footer-mb text-capitalize">Audits</h3>
                            <ul className="footer-links">
                                <li><a href="https://ultrapad.finance.server18.arhamsoft.info/"><img src="images/quill-audits.png" className="img-fluid" alt="" /></a></li>
                                <li><a href="https://ultrapad.finance.server18.arhamsoft.info/"><img src="images/certick.png" className="img-fluid" alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container-fluid custom-block">
                    <div className="footer-bottom-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-9 col-sm-6 mb-0">
                                <p className="copyright mb-1">© Copyright Ultrapad Finance 2022. All rights reserved.</p>
                            </div>
                            <div className="col-lg-3 col-sm-6 mb-0">
                                <ul className="footer-links">
                                    <li><a href="/privacy">privacy policy</a></li>
                                    <li><a href="/tos">terms of use</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </footer>
  </>;
};

export default footer;
