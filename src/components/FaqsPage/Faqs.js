import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import Footer from '../../components/footer'
function Faqs() {

    return (
        <>
            <div className='container'>
                <div class="section_padding">
                        <div className='terms-page bg-transparent'>
                            <div className="page-heading my-lg-4 my-2">
                                <h2 className='text-white text-capitalize mt-4 text-center'>FAQs</h2>
                            </div>
                            <Accordion className='ido-front-side-faqs'>
                                <Accordion.Item>
                                    <Accordion.Header>
                                    <h4 className='card-title text-white mb-0'>How can I participate in IDOs?</h4>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    <p class="card-text">
                                    You can participate in IDOs by staking $UPAD in one of the available staking pools to obtain a level. To do this:</p>
                                    <ul className='ido-ul'>
                                        <li>Head to the <Link to="#" className='text-links'>IDO Staking</Link> page</li>
                                        <li>Connect your wallet</li>
                                        <li>Stake enough $UPAD in your preferred pool to get one of the levels. You can check the list of levels to know the amount of stake you need.</li>
                                        <li>Register for the IDO you are interested in. Go to the <Link to='#' className='text-links'>Pools</Link> page and click on the “Register” button on the IDO pool card.</li>
                                    </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>


                            <Accordion className='ido-front-side-faqs'>
                                <Accordion.Item>
                                    <Accordion.Header>
                                    <h4 className='card-title text-white mb-0'>How do IDO processes?</h4>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    <ul className='ido-ul'>
                                        <li>Registration for IDO opens 48 hours before the start of IDO sale.</li>
                                        <li>IDO registration gets closed 4 hours before the start of IDO sale.</li>
                                        <li>Choose the whitelist and lottery level winners that can be viewed on the pool page.</li>
                                        <li>Calculation of base allocation, depending on the number of participants. There should be enough tokens for guaranteed allocation.</li>
                                        <li>With the start of IDO sale, the lottery level and whitelist winners and registered participants can fund their base allocations in the pool.</li>
                                        <li>FCFS round is activated 20 minutes before the IDO sale ends.</li>
                                        <li>The allocation data will be collected after the sale is ended.  Get the token distribution and listing information from UltraPad Announcements Telegram channel or on your project’s socials.</li>
                                    </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>


                            <Accordion className='ido-front-side-faqs'>
                                <Accordion.Item>
                                    <Accordion.Header>
                                    <h4 className='card-title text-white mb-0'>What is FCFS (First Come First Serve), and who can participate in it?</h4>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    <p class="card-text">FCFS round opens 20 minutes before the end of the sale if a pool isn’t sold out.</p>
                                    <p class="card-text">The previously registered individuals can participate in the first two rounds <span className='pink-text'>(50% and 100%)</span>. Lottery participants who couldn’t win earlier can also participate in these rounds.</p>
                                    <p class="card-text">All stakers <span className='pink-text'></span>(registered or non-registered) with levels higher than “NONE” can participate in the third round <span className='pink-text'>(200%)</span>.</p>
                                    <p class="card-text">All FCFS participants will get an additional allocation in addition to their level allocation; first +50% of the base allocation, after that +100%, and then +200%.</p>
                                    <p class="card-text">The non-registered FCFS participants will only get the percent on top <span className='pink-text'>(without the base allocation)</span>.</p>
                                    <p class="card-text">There will be NO additional allocation for Whitelist winners.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Accordion className='ido-front-side-faqs'>
                                <Accordion.Item>
                                    <Accordion.Header>
                                    <h4 className='card-title text-white mb-0'>Do I need to restake/unstake for each IDO?</h4>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    <p class="card-text">No. You are eligible for any IDOs provided that your $UPAD remains staked. The amount you staked will be matched to the current level system.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Accordion className='ido-front-side-faqs'>
                                <Accordion.Item>
                                    <Accordion.Header>
                                    <h4 className='card-title text-white mb-0'>Is it possible to unstake after each IDO?</h4>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    <p class="card-text">Your tokens will be locked once you stake them. The lock period for your staked tokens depends on the type of pool you staked in: it could be 14, 30, 60, 90, or 180 days.</p>
                                    <p class="card-text">One week <span className='pink-text'>(7 days)</span> pool is deprecated.</p>
                                    <p class="card-text">Pool "14 days" will be re-locked every time you register for the IDO sale.</p>
                                    <p class="card-text">If you want to unstake early, it will cost you a 30% fee.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Accordion className='ido-front-side-faqs'>
                                <Accordion.Item>
                                    <Accordion.Header>
                                    <h4 className='card-title text-white mb-0'>Do I have to stake my $UPAD for 14 days to qualify for an IDO?</h4>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    <p class="card-text">No, UltraPad does not implement any pre-IDO staking policy.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Accordion className='ido-front-side-faqs'>
                                <Accordion.Item>
                                    <Accordion.Header>
                                    <h4 className='card-title text-white mb-0'>I have staked X $UPAD and have Y level, but the pool page shows 'You level NONE, which is too low to participate'. Why?</h4>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    <p class="card-text">You need to register for an IDO staking to participate.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Accordion className='ido-front-side-faqs'>
                                <Accordion.Item>
                                    <Accordion.Header>
                                    <h4 className='card-title text-white mb-0'>What is the difference between lottery levels and guaranteed allocation?</h4>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    <p class="card-text">LOTTERY LEVELS refer to “CHANCE, PROSPECT, and AFFILIATE” that will only bring you a chance to win in each IDO’s lottery. You can see if you are a winner on the pool page as soon as the registration period ends.</p>
                                    <p class="card-text">GUARANTEED LEVELS guarantee you the allocation calculated, depending on the base allocation and your level multiplier.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Accordion className='ido-front-side-faqs'>
                                <Accordion.Item>
                                    <Accordion.Header>
                                    <h4 className='card-title text-white mb-0'>I have used some amount from $UPAD I have already staked to register for approaching IDO. Can my staking level be upgraded if I purchase more $UPAD and stake them after registering for an IDO?</h4>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    <p class="card-text">Upgrading your staking level will not immediately affect the sales you have been registered for. However, you can re-register with a higher level of staking if registration is still open.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Accordion className='ido-front-side-faqs'>
                                <Accordion.Item>
                                    <Accordion.Header>
                                    <h4 className='card-title text-white mb-0'>Do I need to register for each IDO?</h4>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    <p class="card-text">Yes, you have to register for each IDO. It helps us in better and bigger allocation for participants. Moreover, we can ensure that only those stakers who want to participate in the IDO will be considered for base allocation.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Accordion className='ido-front-side-faqs'>
                                <Accordion.Item>
                                    <Accordion.Header>
                                    <h4 className='card-title text-white mb-0'>Can I get any benefit if I stake an amount slightly higher than the tier requirement for IDO registration purposes? (e.g. 3002 $UPAD for CHANCE)</h4>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    <p class="card-text">No, because any amount will be rounded down in the level system that falls between the predetermined number of $UPAD. So, 3000 to 5999 $UPAD will only qualify you for the CHANCE tier.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Accordion className='ido-front-side-faqs'>
                                <Accordion.Item>
                                    <Accordion.Header>
                                    <h4 className='card-title text-white mb-0'>When will I know about my allocation?</h4>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    <p class="card-text">You will find out about your allocation shortly after the registration period ends. This is when all allocations are calculated. Your received amount will depend on the number of participants and the money raised by the pool originator.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Accordion className='ido-front-side-faqs'>
                                <Accordion.Item>
                                    <Accordion.Header>
                                    <h4 className='card-title text-white mb-0'>For how long do I have to fund my allocation? </h4>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    <p class="card-text">You have to fund your IDO allocation for as long as pool originators want. You can see the timeline for when the IDO registration and sale will start and end on the pool page. You can also check on the same page when the FCFS period will begin.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Accordion className='ido-front-side-faqs'>
                                <Accordion.Item>
                                    <Accordion.Header>
                                    <h4 className='card-title text-white mb-0'>What can be used to fund my allocation?</h4>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    <p class="card-text">You can fund your allocation with BUSD. You can see the available pair <span className='pink-text'>(for example, "UPAD/BUSD")</span> under the pool title.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <Accordion className='ido-front-side-faqs'>
                                <Accordion.Item>
                                    <Accordion.Header>
                                    <h4 className='card-title text-white mb-0'>How can I get the token address as an investor for the project? </h4>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                    <p class="card-text">The token address for the project you have invested in is shared by the respective projects and can be viewed on the pool page.</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Faqs













