import React from 'react';
import { Link } from "react-router-dom";
import Arenum from '../../assets/images/arenum.png';
import Icon1 from '../../assets/images/icon-1.png';
import Icon2 from '../../assets/images/icon-2.png';
import Twitter from '../../assets/images/twiiter.png';
import Icon4 from '../../assets/images/icon-4.png';
import Genso from '../../assets/images/genso.png';
import Seror from '../../assets/images/seor.png';
import { Row, Nav, Col, Tab } from 'react-bootstrap';


const multiChainCards = () => {
    return <>
        <section className="tab-cards">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <div className="container-fluid custom-block">
                    <Nav variant="pills">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Upcoming (22)</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Ended (71)</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Ended NFT (11)</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-md-5 mb-3">
                                    <Link to="/product" className="card mb-3">
                                        <div className="d-flex align-items-lg-center">
                                            <figure className="mb-0 game-img">
                                                <img className="img-fluid" src={Arenum} alt="Gammes" />
                                            </figure>
                                            <div className="w-100">
                                                <strong className="card-title">Arenum Games</strong>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="text-uppercase">$ARN</p>
                                                    <a href="http://google.com/" className="tag-btn text-uppercase">upcoming</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social-icon-bar">
                                            <ul>
                                                <li>
                                                    <a href="http://google.com/"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon1} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="http://google.com/"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon2} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="http://google.com/"><figure className="mb-0">
                                                        <img className="img-fluid" src={Twitter} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="http://google.com/"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon4} />
                                                    </figure></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Arenum is the evolution of mobile gaming and cryptocurrency which has a feature-rich ecosystem to attract players...</p>
                                        <div className="progress-bar-div">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">registration close  in 4 hours, 59 minutes</p>
                                                <span className="bar-result">0%</span>
                                            </div>
                                            <div className="progress mb-2">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="game-price">0 BUSD</p>
                                                <p>0/2222222 SEOR</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="card-footer-content">
                                                <ul>
                                                    <li>
                                                        <p className="text-capitalize">starts</p>
                                                        <div>
                                                            <strong className="d-block feature-price blue">Jan 15</strong>
                                                            <span className="text-capitalize">11:00 UTC</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">price</p>
                                                        <div>
                                                            <strong className="d-block feature-price purple">1SMCW</strong>
                                                            <span className="text-capitalize">=0.13 BUS</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">total raise</p>
                                                        <div>
                                                            <strong className="d-block feature-price pink">$100,000</strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                {/* <div className="col-lg-4 col-md-6 mb-md-5 mb-3">
                                    <Link to="/product" className="card mb-3">
                                        <div className="d-flex align-items-lg-center">
                                            <figure className="mb-0 game-img">
                                                <img className="img-fluid" src={Genso} alt="Gammes" />
                                            </figure>
                                            <div className="w-100">
                                                <strong className="card-title">GensoKish</strong>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="text-uppercase">$MV</p>
                                                    <a className="green-tag-btn text-uppercase">upcoming</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social-icon-bar">
                                            <ul>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon1} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon2} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Twitter} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon4} />
                                                    </figure></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Arenum is the evolution of mobile gaming and cryptocurrency which has a feature-rich ecosystem to attract players...</p>
                                        <div className="progress-bar-div">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">registration close  in 4 hours, 59 minutes</p>
                                                <span className="bar-result">0%</span>
                                            </div>
                                            <div className="progress mb-2">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="game-price">0 BUSD</p>
                                                <p>0/2222222 SEOR</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="card-footer-content">
                                                <ul>
                                                    <li>
                                                        <p className="text-capitalize">starts</p>
                                                        <div>
                                                            <strong className="d-block feature-price blue">Jan 15</strong>
                                                            <span className="text-capitalize">11:00 UTC</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">price</p>
                                                        <div>
                                                            <strong className="d-block feature-price purple">1SMCW</strong>
                                                            <span className="text-capitalize">=0.13 BUS</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">total raise</p>
                                                        <div>
                                                            <strong className="d-block feature-price pink">$100,000</strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="layout"><span>This IDO requires KYC verification.</span></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-md-5 mb-3">
                                    <Link to="/product" className="card mb-3">
                                        <div className="d-flex align-items-lg-center">
                                            <figure className="mb-0 game-img">
                                                <img className="img-fluid" src={Seror} alt="Gammes" />
                                            </figure>
                                            <div className="w-100">
                                                <strong className="card-title">SEOR (Whitelist)</strong>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="text-uppercase">$SEOR</p>
                                                    <div className="d-block block-btn">
                                                        <a className="tag-btn text-uppercase">private</a>
                                                        <a className="green-tag-btn text-uppercase">register</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social-icon-bar">
                                            <ul>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon1} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon2} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Twitter} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon4} />
                                                    </figure></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Arenum is the evolution of mobile gaming and cryptocurrency which has a feature-rich ecosystem to attract players...</p>
                                        <div className="progress-bar-div">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">registration close  in 4 hours, 59 minutes</p>
                                                <span className="bar-result">0%</span>
                                            </div>
                                            <div className="progress mb-2">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="game-price">0 BUSD</p>
                                                <p>0/2222222 SEOR</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="card-footer-content">
                                                <ul>
                                                    <li>
                                                        <p className="text-capitalize">starts</p>
                                                        <div>
                                                            <strong className="d-block feature-price blue">Jan 15</strong>
                                                            <span className="text-capitalize">11:00 UTC</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">price</p>
                                                        <div>
                                                            <strong className="d-block feature-price purple">1SMCW</strong>
                                                            <span className="text-capitalize">=0.13 BUS</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">total raise</p>
                                                        <div>
                                                            <strong className="d-block feature-price pink">$100,000</strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="layout"><span>This IDO requires KYC verification.</span></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-md-5 mb-3">
                                    <Link to="/product" className="card mb-3">
                                        <div className="d-flex align-items-lg-center">
                                            <figure className="mb-0 game-img">
                                                <img className="img-fluid" src="images/syn-city.png" alt="Gammes" />
                                            </figure>
                                            <div className="w-100">
                                                <strong className="card-title">SYN City</strong>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="text-uppercase">$SYM</p>
                                                    <div className="d-block block-btn">
                                                        <a className="tag-btn text-uppercase">private</a>
                                                        <a className="green-tag-btn text-uppercase">register</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social-icon-bar">
                                            <ul>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon1} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon2} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Twitter} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon4} />
                                                    </figure></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Arenum is the evolution of mobile gaming and cryptocurrency which has a feature-rich ecosystem to attract players...</p>
                                        <div className="progress-bar-div">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">registration close  in 4 hours, 59 minutes</p>
                                                <span className="bar-result">0%</span>
                                            </div>
                                            <div className="progress mb-2">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="game-price">0 BUSD</p>
                                                <p>0/2222222 SEOR</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="card-footer-content">
                                                <ul>
                                                    <li>
                                                        <p className="text-capitalize">starts</p>
                                                        <div>
                                                            <strong className="d-block feature-price blue">Jan 15</strong>
                                                            <span className="text-capitalize">11:00 UTC</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">price</p>
                                                        <div>
                                                            <strong className="d-block feature-price purple">1SMCW</strong>
                                                            <span className="text-capitalize">=0.13 BUS</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">total raise</p>
                                                        <div>
                                                            <strong className="d-block feature-price pink">$100,000</strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="layout"><span>This IDO requires KYC verification.</span></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-md-5 mb-3">
                                    <Link to="/product" className="card mb-3">
                                        <div className="d-flex align-items-lg-center">
                                            <figure className="mb-0 game-img">
                                                <img className="img-fluid" src="images/dinoland.png" alt="Gammes" />
                                            </figure>
                                            <div className="w-100">
                                                <strong className="card-title">Dinoland</strong>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="text-uppercase">$DNL</p>
                                                    <div className="d-block block-btn">
                                                        <a className="tag-btn text-uppercase">private</a>
                                                        <a className="green-tag-btn text-uppercase">register</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social-icon-bar">
                                            <ul>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon1} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon2} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Twitter} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon4} />
                                                    </figure></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Arenum is the evolution of mobile gaming and cryptocurrency which has a feature-rich ecosystem to attract players...</p>
                                        <div className="progress-bar-div">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">registration close  in 4 hours, 59 minutes</p>
                                                <span className="bar-result">0%</span>
                                            </div>
                                            <div className="progress mb-2">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="game-price">0 BUSD</p>
                                                <p>0/2222222 SEOR</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="card-footer-content">
                                                <ul>
                                                    <li>
                                                        <p className="text-capitalize">starts</p>
                                                        <div>
                                                            <strong className="d-block feature-price blue">Jan 15</strong>
                                                            <span className="text-capitalize">11:00 UTC</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">price</p>
                                                        <div>
                                                            <strong className="d-block feature-price purple">1SMCW</strong>
                                                            <span className="text-capitalize">=0.13 BUS</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">total raise</p>
                                                        <div>
                                                            <strong className="d-block feature-price pink">$100,000</strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="layout"><span>This IDO requires KYC verification.</span></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-md-5 mb-3">
                                    <Link to="/product" className="card mb-3">
                                        <div className="d-flex align-items-lg-center">
                                            <figure className="mb-0 game-img">
                                                <img className="img-fluid" src="images/himo-world.png" alt="Gammes" />
                                            </figure>
                                            <div className="w-100">
                                                <strong className="card-title">Himo World</strong>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="text-uppercase">$HIMO</p>
                                                    <div className="d-block block-btn">
                                                        <a className="tag-btn text-uppercase">private</a>
                                                        <a className="green-tag-btn text-uppercase">register</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social-icon-bar">
                                            <ul>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon1} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon2} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Twitter} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon4} />
                                                    </figure></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Arenum is the evolution of mobile gaming and cryptocurrency which has a feature-rich ecosystem to attract players...</p>
                                        <div className="progress-bar-div">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">registration close  in 4 hours, 59 minutes</p>
                                                <span className="bar-result">0%</span>
                                            </div>
                                            <div className="progress mb-2">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="game-price">0 BUSD</p>
                                                <p>0/2222222 SEOR</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="card-footer-content">
                                                <ul>
                                                    <li>
                                                        <p className="text-capitalize">starts</p>
                                                        <div>
                                                            <strong className="d-block feature-price blue">Jan 15</strong>
                                                            <span className="text-capitalize">11:00 UTC</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">price</p>
                                                        <div>
                                                            <strong className="d-block feature-price purple">1SMCW</strong>
                                                            <span className="text-capitalize">=0.13 BUS</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">total raise</p>
                                                        <div>
                                                            <strong className="d-block feature-price pink">$100,000</strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="layout"><span>This IDO requires KYC verification.</span></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-md-5 mb-3">
                                    <Link to="/product" className="card mb-3">
                                        <div className="d-flex align-items-lg-center">
                                            <figure className="mb-0 game-img">
                                                <img className="img-fluid" src="images/mizar.png" alt="Gammes" />
                                            </figure>
                                            <div className="w-100">
                                                <strong className="card-title">Mizar</strong>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="text-uppercase">$MZR</p>
                                                    <div className="d-block block-btn">
                                                        <a className="tag-btn text-uppercase">private</a>
                                                        <a className="green-tag-btn text-uppercase">register</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social-icon-bar">
                                            <ul>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon1} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon2} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Twitter} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon4} />
                                                    </figure></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Arenum is the evolution of mobile gaming and cryptocurrency which has a feature-rich ecosystem to attract players...</p>
                                        <div className="progress-bar-div">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">registration close  in 4 hours, 59 minutes</p>
                                                <span className="bar-result">0%</span>
                                            </div>
                                            <div className="progress mb-2">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="game-price">0 BUSD</p>
                                                <p>0/2222222 SEOR</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="card-footer-content">
                                                <ul>
                                                    <li>
                                                        <p className="text-capitalize">starts</p>
                                                        <div>
                                                            <strong className="d-block feature-price blue">Jan 15</strong>
                                                            <span className="text-capitalize">11:00 UTC</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">price</p>
                                                        <div>
                                                            <strong className="d-block feature-price purple">1SMCW</strong>
                                                            <span className="text-capitalize">=0.13 BUS</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">total raise</p>
                                                        <div>
                                                            <strong className="d-block feature-price pink">$100,000</strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="layout"><span>This IDO requires KYC verification.</span></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-md-5 mb-3">
                                    <Link to="/product" className="card mb-3">
                                        <div className="d-flex align-items-lg-center">
                                            <figure className="mb-0 game-img">
                                                <img className="img-fluid" src="images/nest.png" alt="Gammes" />
                                            </figure>
                                            <div className="w-100">
                                                <strong className="card-title">Nest Arcade</strong>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="text-uppercase">$FTH</p>
                                                    <div className="d-block block-btn">
                                                        <a className="tag-btn text-uppercase">private</a>
                                                        <a className="green-tag-btn text-uppercase">register</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social-icon-bar">
                                            <ul>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon1} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon2} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Twitter} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon4} />
                                                    </figure></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Arenum is the evolution of mobile gaming and cryptocurrency which has a feature-rich ecosystem to attract players...</p>
                                        <div className="progress-bar-div">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">registration close  in 4 hours, 59 minutes</p>
                                                <span className="bar-result">0%</span>
                                            </div>
                                            <div className="progress mb-2">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="game-price">0 BUSD</p>
                                                <p>0/2222222 SEOR</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="card-footer-content">
                                                <ul>
                                                    <li>
                                                        <p className="text-capitalize">starts</p>
                                                        <div>
                                                            <strong className="d-block feature-price blue">Jan 15</strong>
                                                            <span className="text-capitalize">11:00 UTC</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">price</p>
                                                        <div>
                                                            <strong className="d-block feature-price purple">1SMCW</strong>
                                                            <span className="text-capitalize">=0.13 BUS</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">total raise</p>
                                                        <div>
                                                            <strong className="d-block feature-price pink">$100,000</strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="layout"><span>This IDO requires KYC verification.</span></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-md-5 mb-3">
                                    <Link to="/product" className="card mb-3">
                                        <div className="d-flex align-items-lg-center">
                                            <figure className="mb-0 game-img">
                                                <img className="img-fluid" src="images/mechanium.png" alt="Gammes" />
                                            </figure>
                                            <div className="w-100">
                                                <strong className="card-title">Mechanium</strong>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="text-uppercase">$MECHA</p>
                                                    <div className="d-block block-btn">
                                                        <a className="tag-btn text-uppercase">private</a>
                                                        <a className="green-tag-btn text-uppercase">register</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social-icon-bar">
                                            <ul>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon1} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon2} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Twitter} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon4} />
                                                    </figure></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Arenum is the evolution of mobile gaming and cryptocurrency which has a feature-rich ecosystem to attract players...</p>
                                        <div className="progress-bar-div">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">registration close  in 4 hours, 59 minutes</p>
                                                <span className="bar-result">0%</span>
                                            </div>
                                            <div className="progress mb-2">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="game-price">0 BUSD</p>
                                                <p>0/2222222 SEOR</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="card-footer-content">
                                                <ul>
                                                    <li>
                                                        <p className="text-capitalize">starts</p>
                                                        <div>
                                                            <strong className="d-block feature-price blue">Jan 15</strong>
                                                            <span className="text-capitalize">11:00 UTC</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">price</p>
                                                        <div>
                                                            <strong className="d-block feature-price purple">1SMCW</strong>
                                                            <span className="text-capitalize">=0.13 BUS</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">total raise</p>
                                                        <div>
                                                            <strong className="d-block feature-price pink">$100,000</strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="layout"><span>This IDO requires KYC verification.</span></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-md-5 mb-3">
                                    <Link to="/product" className="card mb-3">
                                        <div className="d-flex align-items-lg-center">
                                            <figure className="mb-0 game-img">
                                                <img className="img-fluid" src="images/animalia.png" alt="Gammes" />
                                            </figure>
                                            <div className="w-100">
                                                <strong className="card-title">Animalia</strong>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="text-uppercase">$ANIM</p>
                                                    <div className="d-block block-btn">
                                                        <a className="tag-btn text-uppercase">private</a>
                                                        <a className="green-tag-btn text-uppercase">register</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social-icon-bar">
                                            <ul>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon1} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon2} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Twitter} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon4} />
                                                    </figure></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Arenum is the evolution of mobile gaming and cryptocurrency which has a feature-rich ecosystem to attract players...</p>
                                        <div className="progress-bar-div">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">registration close  in 4 hours, 59 minutes</p>
                                                <span className="bar-result">0%</span>
                                            </div>
                                            <div className="progress mb-2">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="game-price">0 BUSD</p>
                                                <p>0/2222222 SEOR</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="card-footer-content">
                                                <ul>
                                                    <li>
                                                        <p className="text-capitalize">starts</p>
                                                        <div>
                                                            <strong className="d-block feature-price blue">Jan 15</strong>
                                                            <span className="text-capitalize">11:00 UTC</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">price</p>
                                                        <div>
                                                            <strong className="d-block feature-price purple">1SMCW</strong>
                                                            <span className="text-capitalize">=0.13 BUS</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">total raise</p>
                                                        <div>
                                                            <strong className="d-block feature-price pink">$100,000</strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="layout"><span>This IDO requires KYC verification.</span></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div> */}
                                {/* <div className="col-lg-4 col-md-6 mb-md-5 mb-3">
                                    <Link to="/product" className="card mb-3">
                                        <div className="d-flex align-items-lg-center">
                                            <figure className="mb-0 game-img">
                                                <img className="img-fluid" src="images/continum.png" alt="Gammes" />
                                            </figure>
                                            <div className="w-100">
                                                <strong className="card-title">Continuum World NFT Sale</strong>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="text-uppercase">TBA</p>
                                                    <div className="d-block block-btn">
                                                        <a className="tag-btn text-uppercase">private</a>
                                                        <a className="green-tag-btn text-uppercase">register</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social-icon-bar">
                                            <ul>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon1} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon2} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Twitter} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon4} />
                                                    </figure></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Arenum is the evolution of mobile gaming and cryptocurrency which has a feature-rich ecosystem to attract players...</p>
                                        <div className="progress-bar-div">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">registration close  in 4 hours, 59 minutes</p>
                                                <span className="bar-result">0%</span>
                                            </div>
                                            <div className="progress mb-2">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="game-price">0 BUSD</p>
                                                <p>0/2222222 SEOR</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="card-footer-content">
                                                <ul>
                                                    <li>
                                                        <p className="text-capitalize">starts</p>
                                                        <div>
                                                            <strong className="d-block feature-price blue">Jan 15</strong>
                                                            <span className="text-capitalize">11:00 UTC</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">price</p>
                                                        <div>
                                                            <strong className="d-block feature-price purple">1SMCW</strong>
                                                            <span className="text-capitalize">=0.13 BUS</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">total raise</p>
                                                        <div>
                                                            <strong className="d-block feature-price pink">$100,000</strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="layout"><span>This IDO requires KYC verification.</span></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-md-5 mb-3">
                                    <Link to="/product" className="card mb-3">
                                        <div className="d-flex align-items-lg-center">
                                            <figure className="mb-0 game-img">
                                                <img className="img-fluid" src="images/ducki.png" alt="Gammes" />
                                            </figure>
                                            <div className="w-100">
                                                <strong className="card-title">Duckie Land</strong>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="text-uppercase">$MMETA</p>
                                                    <div className="d-block block-btn">
                                                        <a className="tag-btn text-uppercase">private</a>
                                                        <a className="green-tag-btn text-uppercase">register</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social-icon-bar">
                                            <ul>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon1} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon2} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Twitter} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon4} />
                                                    </figure></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Arenum is the evolution of mobile gaming and cryptocurrency which has a feature-rich ecosystem to attract players...</p>
                                        <div className="progress-bar-div">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">registration close  in 4 hours, 59 minutes</p>
                                                <span className="bar-result">0%</span>
                                            </div>
                                            <div className="progress mb-2">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="game-price">0 BUSD</p>
                                                <p>0/2222222 SEOR</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="card-footer-content">
                                                <ul>
                                                    <li>
                                                        <p className="text-capitalize">starts</p>
                                                        <div>
                                                            <strong className="d-block feature-price blue">Jan 15</strong>
                                                            <span className="text-capitalize">11:00 UTC</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">price</p>
                                                        <div>
                                                            <strong className="d-block feature-price purple">1SMCW</strong>
                                                            <span className="text-capitalize">=0.13 BUS</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">total raise</p>
                                                        <div>
                                                            <strong className="d-block feature-price pink">$100,000</strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="layout"><span>This IDO requires KYC verification.</span></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div> */}
                                {/* <div className="col-lg-4 col-md-6 mb-md-5 mb-3">
                                    <Link to="/product" className="card mb-3">
                                        <div className="d-flex align-items-lg-center">
                                            <figure className="mb-0 game-img">
                                                <img className="img-fluid" src="images/enrux.png" alt="Gammes" />
                                            </figure>
                                            <div className="w-100">
                                                <strong className="card-title">Enrex</strong>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="text-uppercase">$ENRX</p>
                                                    <div className="d-block block-btn">
                                                        <a className="tag-btn text-uppercase">private</a>
                                                        <a className="green-tag-btn text-uppercase">register</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social-icon-bar">
                                            <ul>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon1} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon2} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Twitter} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon4} />
                                                    </figure></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Arenum is the evolution of mobile gaming and cryptocurrency which has a feature-rich ecosystem to attract players...</p>
                                        <div className="progress-bar-div">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">registration close  in 4 hours, 59 minutes</p>
                                                <span className="bar-result">0%</span>
                                            </div>
                                            <div className="progress mb-2">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="game-price">0 BUSD</p>
                                                <p>0/2222222 SEOR</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="card-footer-content">
                                                <ul>
                                                    <li>
                                                        <p className="text-capitalize">starts</p>
                                                        <div>
                                                            <strong className="d-block feature-price blue">Jan 15</strong>
                                                            <span className="text-capitalize">11:00 UTC</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">price</p>
                                                        <div>
                                                            <strong className="d-block feature-price purple">1SMCW</strong>
                                                            <span className="text-capitalize">=0.13 BUS</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">total raise</p>
                                                        <div>
                                                            <strong className="d-block feature-price pink">$100,000</strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="layout"><span>This IDO requires KYC verification.</span></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-md-5 mb-3">
                                    <Link to="/product" className="card mb-3">
                                        <div className="d-flex align-items-lg-center">
                                            <figure className="mb-0 game-img">
                                                <img className="img-fluid" src="images/immunify.png" alt="Gammes" />
                                            </figure>
                                            <div className="w-100">
                                                <strong className="card-title">ImmunifyLife</strong>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="text-uppercase">$IMM</p>
                                                    <div className="d-block block-btn">
                                                        <a className="tag-btn text-uppercase">private</a>
                                                        <a className="green-tag-btn text-uppercase">register</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social-icon-bar">
                                            <ul>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon1} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon2} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Twitter} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon4} />
                                                    </figure></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Arenum is the evolution of mobile gaming and cryptocurrency which has a feature-rich ecosystem to attract players...</p>
                                        <div className="progress-bar-div">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">registration close  in 4 hours, 59 minutes</p>
                                                <span className="bar-result">0%</span>
                                            </div>
                                            <div className="progress mb-2">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="game-price">0 BUSD</p>
                                                <p>0/2222222 SEOR</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="card-footer-content">
                                                <ul>
                                                    <li>
                                                        <p className="text-capitalize">starts</p>
                                                        <div>
                                                            <strong className="d-block feature-price blue">Jan 15</strong>
                                                            <span className="text-capitalize">11:00 UTC</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">price</p>
                                                        <div>
                                                            <strong className="d-block feature-price purple">1SMCW</strong>
                                                            <span className="text-capitalize">=0.13 BUS</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">total raise</p>
                                                        <div>
                                                            <strong className="d-block feature-price pink">$100,000</strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="layout"><span>This IDO requires KYC verification.</span></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div> */}
                            </div>
                        </Tab.Pane>




                        <Tab.Pane eventKey="second">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-md-5 mb-3">
                                    {/* <Link to="/product" className="card mb-3">
                                        <div className="d-flex align-items-center">
                                            <figure className="mb-0 game-img">
                                                <img className="img-fluid" src={Arenum} alt="Gammes" />
                                            </figure>
                                            <div className="w-100">
                                                <strong className="card-title">Arenum Games</strong>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="text-uppercase">$ARN</p>
                                                    <a className="tag-btn text-uppercase">upcoming</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social-icon-bar">
                                            <ul>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon1} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon2} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Twitter} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon4} />
                                                    </figure></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Arenum is the evolution of mobile gaming and cryptocurrency which has a feature-rich ecosystem to attract players...</p>
                                        <div className="progress-bar-div">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">registration close  in 4 hours, 59 minutes</p>
                                                <span className="bar-result">0%</span>
                                            </div>
                                            <div className="progress mb-2">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="game-price">0 BUSD</p>
                                                <p>0/2222222 SEOR</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="card-footer-content">
                                                <ul>
                                                    <li>
                                                        <p className="text-capitalize">starts</p>
                                                        <div>
                                                            <strong className="d-block feature-price blue">Jan 15</strong>
                                                            <span className="text-capitalize">11:00 UTC</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">price</p>
                                                        <div>
                                                            <strong className="d-block feature-price purple">1SMCW</strong>
                                                            <span className="text-capitalize">=0.13 BUS</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">total raise</p>
                                                        <div>
                                                            <strong className="d-block feature-price pink">$100,000</strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Link> */}
                                </div>
                                {/* <div className="col-lg-4 col-md-6 mb-md-5 mb-3">
                                    <Link to="/product" className="card mb-3">
                                        <div className="d-flex align-items-center">
                                            <figure className="mb-0 game-img">
                                                <img className="img-fluid" src={Genso} alt="Gammes" />
                                            </figure>
                                            <div className="w-100">
                                                <strong className="card-title">GensoKish</strong>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="text-uppercase">$MV</p>
                                                    <a className="green-tag-btn text-uppercase">upcoming</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social-icon-bar">
                                            <ul>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon1} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon2} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Twitter} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon4} />
                                                    </figure></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Arenum is the evolution of mobile gaming and cryptocurrency which has a feature-rich ecosystem to attract players...</p>
                                        <div className="progress-bar-div">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">registration close  in 4 hours, 59 minutes</p>
                                                <span className="bar-result">0%</span>
                                            </div>
                                            <div className="progress mb-2">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="game-price">0 BUSD</p>
                                                <p>0/2222222 SEOR</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="card-footer-content">
                                                <ul>
                                                    <li>
                                                        <p className="text-capitalize">starts</p>
                                                        <div>
                                                            <strong className="d-block feature-price blue">Jan 15</strong>
                                                            <span className="text-capitalize">11:00 UTC</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">price</p>
                                                        <div>
                                                            <strong className="d-block feature-price purple">1SMCW</strong>
                                                            <span className="text-capitalize">=0.13 BUS</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">total raise</p>
                                                        <div>
                                                            <strong className="d-block feature-price pink">$100,000</strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="layout"><span>This IDO requires KYC verification.</span></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-md-5 mb-3">
                                    <Link to="/product" className="card mb-3">
                                        <div className="d-flex align-items-center">
                                            <figure className="mb-0 game-img">
                                                <img className="img-fluid" src={Seror} alt="Gammes" />
                                            </figure>
                                            <div className="w-100">
                                                <strong className="card-title">SEOR (Whitelist)</strong>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="text-uppercase">$SEOR</p>
                                                    <div className="d-block block-btn">
                                                        <a className="tag-btn text-uppercase">private</a>
                                                        <a className="green-tag-btn text-uppercase">register</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social-icon-bar">
                                            <ul>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon1} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon2} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Twitter} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon4} />
                                                    </figure></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Arenum is the evolution of mobile gaming and cryptocurrency which has a feature-rich ecosystem to attract players...</p>
                                        <div className="progress-bar-div">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">registration close  in 4 hours, 59 minutes</p>
                                                <span className="bar-result">0%</span>
                                            </div>
                                            <div className="progress mb-2">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="game-price">0 BUSD</p>
                                                <p>0/2222222 SEOR</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="card-footer-content">
                                                <ul>
                                                    <li>
                                                        <p className="text-capitalize">starts</p>
                                                        <div>
                                                            <strong className="d-block feature-price blue">Jan 15</strong>
                                                            <span className="text-capitalize">11:00 UTC</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">price</p>
                                                        <div>
                                                            <strong className="d-block feature-price purple">1SMCW</strong>
                                                            <span className="text-capitalize">=0.13 BUS</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">total raise</p>
                                                        <div>
                                                            <strong className="d-block feature-price pink">$100,000</strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="layout"><span>This IDO requires KYC verification.</span></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div> */}
                            </div>
                        </Tab.Pane>



                        <Tab.Pane eventKey="third">
                            {/* <div className="row">
                                <div className="col-lg-4 col-md-6 mb-md-5 mb-3">
                                    <Link to="/product" className="card mb-3">
                                        <div className="d-flex align-items-center">
                                            <figure className="mb-0 game-img">
                                                <img className="img-fluid" src="images/enrux.png" alt="Gammes" />
                                            </figure>
                                            <div className="w-100">
                                                <strong className="card-title">Enrex</strong>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="text-uppercase">$ENRX</p>
                                                    <div className="d-block block-btn">
                                                        <a className="tag-btn text-uppercase">private</a>
                                                        <a className="green-tag-btn text-uppercase">register</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social-icon-bar">
                                            <ul>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon1} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon2} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Twitter} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon4} />
                                                    </figure></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Arenum is the evolution of mobile gaming and cryptocurrency which has a feature-rich ecosystem to attract players...</p>
                                        <div className="progress-bar-div">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">registration close  in 4 hours, 59 minutes</p>
                                                <span className="bar-result">0%</span>
                                            </div>
                                            <div className="progress mb-2">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="game-price">0 BUSD</p>
                                                <p>0/2222222 SEOR</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="card-footer-content">
                                                <ul>
                                                    <li>
                                                        <p className="text-capitalize">starts</p>
                                                        <div>
                                                            <strong className="d-block feature-price blue">Jan 15</strong>
                                                            <span className="text-capitalize">11:00 UTC</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">price</p>
                                                        <div>
                                                            <strong className="d-block feature-price purple">1SMCW</strong>
                                                            <span className="text-capitalize">=0.13 BUS</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">total raise</p>
                                                        <div>
                                                            <strong className="d-block feature-price pink">$100,000</strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="layout"><span>This IDO requires KYC verification.</span></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-md-5 mb-3">
                                    <Link to="/product" className="card mb-3">
                                        <div className="d-flex align-items-center">
                                            <figure className="mb-0 game-img">
                                                <img className="img-fluid" src="images/immunify.png" alt="Gammes" />
                                            </figure>
                                            <div className="w-100">
                                                <strong className="card-title">ImmunifyLife</strong>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <p className="text-uppercase">$IMM</p>
                                                    <div className="d-block block-btn">
                                                        <a className="tag-btn text-uppercase">private</a>
                                                        <a className="green-tag-btn text-uppercase">register</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="social-icon-bar">
                                            <ul>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon1} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon2} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Twitter} />
                                                    </figure></a>
                                                </li>
                                                <li>
                                                    <a href="#"><figure className="mb-0">
                                                        <img className="img-fluid" src={Icon4} />
                                                    </figure></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <p>Arenum is the evolution of mobile gaming and cryptocurrency which has a feature-rich ecosystem to attract players...</p>
                                        <div className="progress-bar-div">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-2">registration close  in 4 hours, 59 minutes</p>
                                                <span className="bar-result">0%</span>
                                            </div>
                                            <div className="progress mb-2">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p className="game-price">0 BUSD</p>
                                                <p>0/2222222 SEOR</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="card-footer-content">
                                                <ul>
                                                    <li>
                                                        <p className="text-capitalize">starts</p>
                                                        <div>
                                                            <strong className="d-block feature-price blue">Jan 15</strong>
                                                            <span className="text-capitalize">11:00 UTC</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">price</p>
                                                        <div>
                                                            <strong className="d-block feature-price purple">1SMCW</strong>
                                                            <span className="text-capitalize">=0.13 BUS</span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <p className="text-capitalize">total raise</p>
                                                        <div>
                                                            <strong className="d-block feature-price pink">$100,000</strong>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="layout"><span>This IDO requires KYC verification.</span></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div> */}
                        </Tab.Pane>
                    </Tab.Content>
                </div>
            </Tab.Container>





        </section>
    </>
};

export default multiChainCards;
