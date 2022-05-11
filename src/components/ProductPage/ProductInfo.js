import React from "react";
import { Row, Col, Container } from 'react-bootstrap';
import { Dropdown, ProgressBar } from "react-bootstrap"
const ProductInfo = () => {
    return (
        <section id="productInfo">
            <Container>
                <Row>
                    <div className="col-lg-4">
                        <div className="profile-info">
                            <div className="top-sec">
                                <div className="profile">
                                    <img src="images/nunuspirits.png" alt="Profile img" />
                                </div>
                                <div className="name">
                                    <h2>Nunu Spirits</h2>
                                    <div className="text-sm font-secondary text-ignored">NNT / BUSD</div>
                                </div>

                            </div>
                            <div className="badges">
                                <span className="outerside soon">Soon</span>
                                <span className="outerside level">level</span>
                                <span className="outerside kyc">KYC</span>
                            </div>
                            <div className="wallet-sec text-center">
                                <Dropdown>
                                    <Dropdown.Toggle id="dropdown-basic">
                                        Connect Wallet
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <div className="input-wrapper">
                                    <div className="filed-wrapper">
                                        <input type="" name="" className="input-field" />
                                    </div>
                                    <button className="light-blue-btn">Stake</button>
                                </div>
                            </div>
                            <div className="participate text-end">
                                <a href="http://google.com/">How to participate</a>
                            </div>
                            <div className="usd">
                                <h3>1 BUSD = 16.666 NNT</h3>
                                <h4>1 NNT = 0.06 BUSD</h4>
                            </div>
                            <div className="progress-bar">
                                <div className="prog-text d-flex">
                                    <span>opens in 2 days, 22 hours</span>
                                    <span>0%</span>
                                </div>
                                <ProgressBar now={0} />
                                <div className="prog-text d-flex">
                                    <span>0 BUSD</span>
                                    <span>0 / 3333333 NNT</span>
                                </div>

                            </div>
                            <div className="wifi text-white">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"></path></svg>
                                <span>IDO and distribution on BSC</span>
                            </div>
                            <div className="d-sm-flex text-white justify-content-between ">
                                <div className="sale">
                                    <span>💰 Sale</span>
                                </div>
                                <span>	Jan 27, 11:00 – 16:00 pm UTC</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="coin-detail text-white">
                            <div className="d-flex align-items-center">
                                <div className="coin-profile">
                                    <img src="images/nunuspirits.png" alt="Profile img" />
                                </div>
                                <h2>Nunu Spirits</h2>
                            </div>
                            <p>
                                Nunu Spirits is the first NFT game where you can plant trees in the real world! Nunu Spirits merges the joy of casual gaming with the play2earn capacity of blockchain and turns it all into ecological action. Players collect and earn 3D NFTs, called Nunus, in a super fun game world where every Nunu has the chance to become a real tree, planted in the real world. The team bringing you Nunu Spirits is well versed in both games and crypto and most recently has been working on one of the most successful NFT projects of 2021.
                            </p>
                            <div className="social-icons">
                                <ul className="mb-0">
                                    <li><a href="http://google.com/"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg></a></li>
                                    <li>
                                        <a href="http://google.com/">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z"></path></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://google.com/">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://google.com/">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg>
                                        </a>
                                    </li>
                                    <li className="mx-0">
                                        <a href="http://google.com/">
                                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm57.1 120H305c7.7 0 13.4 7.1 11.7 14.7l-38 168c-1.2 5.5-6.1 9.3-11.7 9.3h-38c-5.5 0-10.3-3.8-11.6-9.1-25.8-103.5-20.8-81.2-25.6-110.5h-.5c-1.1 14.3-2.4 17.4-25.6 110.5-1.3 5.3-6.1 9.1-11.6 9.1H117c-5.6 0-10.5-3.9-11.7-9.4l-37.8-168c-1.7-7.5 4-14.6 11.7-14.6h24.5c5.7 0 10.7 4 11.8 9.7 15.6 78 20.1 109.5 21 122.2 1.6-10.2 7.3-32.7 29.4-122.7 1.3-5.4 6.1-9.1 11.7-9.1h29.1c5.6 0 10.4 3.8 11.7 9.2 24 100.4 28.8 124 29.6 129.4-.2-11.2-2.6-17.8 21.6-129.2 1-5.6 5.9-9.5 11.5-9.5zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"></path></svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="pool-detail">
                                <h4>Pool Details</h4>
                                <ul>
                                    <li className="d-sm-flex">
                                        <div className="w-50 mb-sm-0 mb-1">
                                            <span className="title">Access Type: </span>
                                            <span> Levels</span>
                                        </div>
                                        <div className="w-50">
                                            <span className="title">Hard Cap: </span>
                                            <span> $200 007</span>
                                        </div>
                                    </li>
                                    <li><span className="title">Swap Rate: </span><span className="desc-color">1 NNT<span className="text-white"> = </span>  $0.06 | 16.666 NNT<span className="text-white"> per </span>  1 BUSD</span></li>
                                    <li className="mb-0">
                                        <span className="title">Start/end: </span>
                                        <span> 27 Jan, 11:00 am –16:00 pm UTC</span>
                                    </li>
                                </ul>
                                <h4>Token</h4>
                                <ul>
                                    <li>
                                        <span className="title">Token: </span>
                                        <span className="desc-color"> Nunu Spirits (NNT)</span>
                                    </li>
                                    <li>
                                        <span className="title">Type: </span>
                                        <span> BEP-20</span>
                                    </li>
                                    <li>
                                        <span className="title">Total Supply: </span>
                                        <span> 150 000 000 NNT</span>
                                    </li>
                                    <li>
                                        <span className="title">Initial Supply: </span>
                                        <span className="desc-color"> 16 350 000 NNT<span className="text-white">, market cap </span>$981 039</span>
                                    </li>
                                    <li className="mb-0">
                                        <span className="title">Token Listing: </span>
                                        <span> TBA</span>
                                    </li>
                                </ul>
                                <h4>Distribution</h4>
                                <ul className="mb-0">
                                    <li>
                                        <span className="title">Distribution: </span>
                                        <span> Claimed on TrustPad</span>
                                    </li>
                                    <li className="mb-0">
                                        <span className="title">Vesting: </span>
                                        <span> 20% at TGE, 3 month cliff, then 4.44% each month</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}
export default ProductInfo;