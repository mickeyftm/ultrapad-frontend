import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Privacy() {

    const [data, setData] = useState('')
      useEffect(() => {
        axios.get('https://holdex-ido-server.server18.arhamsoft.info/api/site_settings').then(res => {
            setData(res.data.data.privacy_content)
          })
          .catch(err => {
            console.log(err)
          })
      }, [])

    return (
        <>
            <div className='container'>

            <div class="section_padding">
                <div className='terms-page'>
                    <div className="page-heading my-lg-4 my-2">
                        <h2 className='text-white text-capitalize mt-4 text-center'>Privacy policy</h2>
                    </div>
<<<<<<< HEAD
                    <p dangerouslySetInnerHTML={{__html: data}}></p>
=======
                    <p class="text-center">Last Updated: [28 January, 2022]</p>
                    <p>This end-user agreement (the "Agreement") should be read by you (the "User" or "you") in its entirety prior to your use of Ultrapad’s service or products. Be aware that this Agreement constitutes a legally binding agreement between you and Ultrapad (referred to herein as "Ultrapad", "us" or "we") which owns and operates the website on the Internet and the Service at https://Ultrapad.io/ (the "Service"). By accessing or using the site or Ultrapad Services, you agree that you have read, understood, and agree to be bound by this agreement.</p>
                    <h3>1. General Conditions of use </h3>
                    <p>1.1. By signing up to use an Account through any of the Ultrapad Clients’ social websites made available through the Ultrapad Platform, you agree to comply with and be legally bound by this Agreement. If you do not agree to any of the terms set forth in this Agreement or any subsequent modification to the Agreement, you may not access or use any of the Ultrapad Services and must cancel your Ultrapad Account immediately.</p>
                    <p>1.2. We may amend or modify this Agreement by posting such amended or modified Agreement ("Revised Agreement") on the Ultrapad Platform or by notifying you about the changes via email. By continuing to access or use the Ultrapad Services once the Revised Agreement is effective, you agree to be bound by its terms.</p>
                    <p>1.3. To be eligible to use the Ultrapad Services, you must be at least 18 years old (or the applicable age of majority and contractual capacity in each qualifying jurisdiction). By accessing or using the Ultrapad Services you represent and warrant that you are 18 or older.</p>
                    <p>1.4. Ultrapad disclaims any and all warranties, expressed or implied, in connection with the service which is provided to you "as is" and we provide you with no warranty or representation whatsoever regarding its quality, fitness for purpose, completeness, or accuracy.</p>
                    <p>1.5. The term "Ultrapad", its domain names and any other trademarks, or service marks used by Ultrapad as part of the Service (the "Trademarks"), are solely owned by Ultrapad. In addition, all content on the website, including, but not limited to, the images, pictures, graphics, photographs, animations, videos, music, audio, and text (the "Site Content") belongs to Ultrapad and is protected by copyright and/or other intellectual property or other rights. You hereby acknowledge that by using the Service, you obtain no rights in the Site Content and/or the Trademarks, or any part thereof. Under no circumstances may you use the Site Content and/or the Trade Marks without Ultrapad’s prior written consent. Additionally, you agree not to do anything that will harm or potentially harm the rights, including the intellectual property rights of Ultrapad.</p>

                    <h3>2. Authority/Terms of Service</h3>
                    <p>You agree to the rules of the Service provided and described on the https://Ultrapad.io/ website. Ultrapad retains all authority over the issuing, maintenance, and closing of the Service. The decision of Ultrapad’s management, concerning any use of the Service, or dispute resolution, is final and shall not be open to review or appeal.</p>

                    <h3>3. Your Representations and Warranties</h3>
                    <p>Prior to your use of the Service and on an ongoing basis you represent, warrant, covenant, and agree that:</p>
                    <p>3.1. There is a risk of losing cryptocurrency &amp; other funds of value when using the Service and Ultrapad has no responsibility to you for any such loss;</p>
                    <p>3.2. Your use of the Service is at your sole option, discretion, and risk. You hereby accept full responsibility for any consequences that may arise from your use of the Services, and expressly agree and acknowledge that Ultrapad shall have absolutely no liability in this regard.</p>
                    <p>3.3. You are solely responsible for any applicable taxes which may be payable on cryptocurrency traded or transacted by you through your using the Service;</p>
                    <p>3.4. Any cryptographic tokens, blockchain technology, or distributed ledger technology-related projects are new and relatively untested, and outside of both our and our Clients’ exclusive control. Any adverse changes in market forces, technology, and regulatory environment impacting our performance under this Agreement shall absolve us from responsibility in this regard, including but not limited to hacking attacks, possible theft, unfavorable regulatory action, or unclear legal/tax status of cryptographic tokens.</p>
                    <p>3.5. (i) You are eighteen years of age or older, (ii) you are of the age of majority in your jurisdiction, (iii) you are accessing the Service from a jurisdiction in which it is legal to do so, (iv) your use of the Services is not prohibited by applicable law, and at all times compliant with applicable law; and (v) you are solely responsible for use of the Services and, if applicable, for all activities that occur on or through your User Account.</p>
                    <h3>4. Prohibited Uses &amp; Termination</h3>
                    <p>4.1. In connection with your use of the Ultrapad Services, and your interactions with other Users, and third parties you agree and represent you will not engage in any illegal, unauthorized, or improper activity, which are:</p>
                    <ul className='terms-list-style'>
                        <li>Infringe any proprietary rights, including but not limited to copyrights, patents, trademarks, or trade secrets of Ultrapad;</li>
                        <li>Create multiple accounts, including for collusion and/or abuse of service;</li>
                        <li>Use the Services to transmit any data or send or upload any material that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware, or any other harmful programs or similar computer code designed to adversely affect the operation of any computer software or hardware;</li>
                        <li>Make any backup or archival copies of the Platform or any part thereof, including disassembling or de-compilation of the Platform;</li>
                    </ul>
                    <p>4.2. We reserve the right to (a) modify or discontinue any portion of the Ultrapad Services, and (b) suspend or terminate your access to the Ultrapad Services, at any time, and from time to time, without notice to you in certain, limited circumstances described herein. You agree that we shall not be liable to you or any third party for any modification or termination of the Ultrapad Services, or suspension or termination of your access to the Ultrapad Services, except to the extent otherwise expressly set forth herein.</p>

                    <h3>5. Know your Customer ("KYC") and Anti-Money Laundering (AML) Policy</h3>
                    <p>5.1. Ultrapad is a permissionless, fully decentralized platform for token sales, swaps, and decentralized exchange. As a software development company, Ultrapad has no role in enforcing KYC by default, however, we do provide such tools for fundraising entities using Ultrapad to enforce on their users, if the entities choose to do so. The use of KYC/AML tools on Ultrapad by fundraising entities using the Service is completely at the discretion of said entities. Ultrapad is implementing KYC tools into our launchpad through <a className='text-links' href="https://kycaid.com/">KYCAid</a>. Please refer to their <a className='text-links' href="https://kycaid.com/terms-and-conditions">Terms and Conditions</a> and <a className='text-links' href="https://kycaid.com/data-protection-policy">Data protection policy</a></p>
                    <p>5.2. Although Ultrapad makes no warranty as to the merit, legality, or juridical nature of any token (including whether or not it is considered a security or financial instrument under any applicable Securities Laws), token sale or fundraiser on top of Ultrapad, we nonetheless understand the need of some token projects to require KYC/AML on their token sale participants.</p>
                    <p>5.3. Therefore, and at the sole behest of fundraising entities and/or competent regulatory authorities, Ultrapad reserves the right at any time:</p>
                    <ul className='terms-list-style'>
                        <li>To ask for any KYC documentation it deems necessary to determine the identity and location of a User.</li><li>To restrict service and payment until identity is sufficiently determined.</li>
                        <li>To share submitted KYC information and documentation to 3rd parties to verify the authenticity of submitted information, and the end-user (you) agrees to this by using the Service.</li>
                        <li>To confiscate any and all funds that are found to be in violation of relevant and applicable anti-money laundering (AML) and countering terrorism financing (CFT) laws and regulations, and to cooperate with the competent authorities when and if necessary.</li>
                    </ul>
                    <p>5.4. Although Ultrapad makes no warranty as to the merit, legality, or juridical nature of any IDO token, we nonetheless understand the need of IDO fundraising projects to require KYC/AML Verification on their token sale participants of Users. Therefore, Ultrapad reserves the right:</p>
                    <ul className='terms-list-style'>
                        <li>At any time, to ask for your personal information, Name-Surname, Birthday, e-mail address, nationality, location, government identification number (Identification Card/Passport number and Date of Identification Card/Passport issuing), telegram username, BEP-20 wallet address, and any KYC documentation with the liveness test that it deems necessary to determine the identity and location of a User, and reserves the right to restrict Service and payment until identity is sufficiently determined;</li>
                        <li>The liveness test shall mean taking a photo of your government identification with your phone or camera. Then, also take a photo of yourself (selfie of your face) holding your ID document and the paper you wrote on next to your face (not covering your face).</li>
                        <li>To share the submitted KYC information and documentation to the third parties to verify the authenticity of submitted information, and the end user (you) agree to this by using the Service;</li>
                        <li>To reject the use of the Service that Ultrapad has the reasonable ground to believe that they are found to be in violation of relevant and applicable AML/CFT laws and regulations, and to cooperate with the competent authorities or any investigation when and if necessary upon the valid request by the court order.</li>
                    </ul>
                    <p>5.6. Ultrapad expressly prohibits and rejects the use of the Service for any form of illicit activity, including money laundering, terrorist financing or trade sanctions violations, consistent with various jurisdictions’ laws, regulations and norms. To that end, the Service is not offered to individuals or entities on any Politically Exposed Persons (“PEP”) lists, or subject to any United States, European Union, or other global sanctions or watch lists. By using the Service, you represent that you are not on any such lists.</p>
                    <p>5.7. You fully acknowledge that your information and KYC documentation may be disclosed to government agencies or regulator upon the only valid request of the court order. Once you have decided to participate in any IDO fundraising event and start staking your Ultrapad Tokens, you must ensure that all information provided to Ultrapad is complete, accurate, and updated in a timely manner. Ultrapad will rely on the information you provided and should there be any reasonable grounds to believe that the partial or the whole of your information provided to us is incomplete, or incorrect, or outdated, Ultrapad reserves the right to send you a notice to demand correction, or to delete such information directly, and, as the case may be, to prohibit you to access to all or part of Ultrapad website and the Services.</p>
                    <p>5.8. If Ultrapad has the reasonable ground to believe that any user transacts or use the Services by using the digital currencies derived from any suspicious illegal activities, Ultrapad shall be entitled to freeze/close/delete accounts as necessary. Ultrapad will hold no liability to such users for any damage, or loss arising out of or in connection with this manner herein. Please note that any attempt to circumvent this Clauses will also result in a similar action.</p>

                    <h3>6. Retention of Intellectual Property Rights of Ultrapad Platform and Ultrapad clients</h3>
                    <p>6.1. The Ultrapad Platform and all Ultrapad Services, including their design elements or concepts and any underlying intellectual property, including, but not limited to, all trademarks, are the property of Ultrapad and/or Ultrapad Customers (as applicable), and are protected by copyright, patent, trade secret, and other intellectual property laws.</p>
                    <p>6.2. Ultrapad and Ultrapad Clients retain any and all rights, title, and interest in and to Ultrapad Platform and Ultrapad Services (including, without limitation, all intellectual property rights), including all copies, modifications, extensions, and derivative works thereof. Your right to use the Ultrapad Platform and Ultrapad Services is limited to the rights expressly granted in these Terms. Except as stated in these Terms, nothing in these Terms should be construed as conferring any right in or license to Ultrapad’s or any third party’s intellectual rights.</p>
                    <p>6.3. You may not: Copy, create derivative works, distribute, publish, reverse engineer, decompile, disassemble, modify, or translate the Ultrapad website or the Service; or Use the Service that in any way is prohibited by applicable laws or regulations (each of the above herein defined as an "Unauthorized Use"). You agree that you will be solely responsible for any damage, costs, or expenses arising out of or in connection with any unauthorized use by you</p>

                    <h3>7. Jurisdiction and Governing Law</h3>
                    <p>7.1. The laws of Panama (with the exclusion of any rules that might lead to the use of any other law which is not the law of Panama) will govern the validity and construction of this Agreement, any separate agreement whereby we provide you any services and any dispute arising out of or in relation to this Agreement or such separate agreement.</p>
                    <p>7.2. Persons located in or residents of specific countries (varies from project to project) are not permitted to make use of the Service: Bolivia, Cambodia, Iran, Iraq, Libya, Nepal, Zimbabwe, Liberia, Myanmar, North Korea. For the avoidance of doubt, the foregoing restrictions on Service from Prohibited Jurisdictions apply equally to residents and citizens of other nations while located in a Prohibited Jurisdiction. Any attempt to circumvent the restrictions on usage by any persons located in a Prohibited Jurisdiction or Restricted Jurisdiction is a breach of this Agreement. An attempt at circumvention includes, but is not limited to, manipulating the information used by Ultrapad to identify your location and providing Ultrapad with false or misleading information regarding your location or place of residence.</p>
                    <h3>8. Third-party services </h3>
                    <p>8.1. The Services may include services, content, and information owned, made available, or otherwise licensed by a third party ("Third-Party Services") or contain links to Third Party Services. You understand that Third-Party Services are the responsibility of the third party that created or provided it and acknowledges that the use of such Third Party Services is solely at your own risk.</p>
                    <p>8.2. Ultrapad makes no representations and excludes all warranties and liabilities arising out of or pertaining to such Third Party Services, including its accuracy or completeness.</p>
                    <p>8.3. All intellectual property rights in and to Third-Party Services are the property of the respective third parties.</p>

                    <h3>9. Ultrapad token</h3><p>9.1. Ultrapad will issue a blockchain-based token called "Ultrapad Token" on Binance Smart Chain Network. Ultrapad Token is classified as the utility token designed to be used solely on the Ultrapad Platform or on https://Ultrapad.io/ website.</p>
                    <p>9.2. Users who stake Ultrapad Tokens in our staking pools will be eligible to participate in IDO fundraising project event.</p>
                    <p>9.3. Users who stake Ultrapad Tokens in our staking pools are getting additional rewards in a form of TPAD tokens. Each staking pool provides a dynamic APY. This number is not a guarantee and can be changed at any time. We are not responsible for your potential losses when staking pool APY is adjusted.</p>
                    <p>9.4. Ultrapad Token is not considered as security of any kind, and it also does not carry any right to vote, manage or share in the Ultrapad Platform.</p>
                    <p>9.5. Ultrapad Token is neither money nor legal tender/currency, whether fiat or otherwise, and it does not carry any value whether it is intrinsic or assigned.</p>

                    <h3>10. Breach</h3>
                    <p>10.1. Without prejudice to any other rights, if a User breaches in whole or in part any provision contained herein, Ultrapad reserves the right to take such action as it sees fit, including terminating this Agreement or any other agreement in place with the User and/or taking legal action against such User.</p>
                    <p>10.2. You agree to indemnify and hold harmless Ultrapad, its affiliates, subsidiaries, licensors, and their respective directors, officers, members, managers, employees, and agents from and against any and all claims and expenses arising out of your use of the Services, a breach of any provision of these Terms by you or any person using the Services on your behalf, a breach by you of any applicable laws, or any third-party claim to the extent arising from or connected with an allegation that your use of the Services in accordance with these Terms infringes any rights of a third party.</p>

                    <h3>11. Force Majeure </h3>
                    <p>11.1. Ultrapad shall have no liability for delays, failure in performance, or interruption of service which result directly or indirectly from any cause or condition beyond our reasonable control, including but not limited to, any delay or failure due to any act of God, the act of civil or military authorities, the act of terrorists, civil disturbance, war, strike or other labor dispute, fire, interruption in telecommunications or Internet services or network provider services, failure of equipment and/or software, other catastrophe or any other occurrence which is beyond our reasonable control and shall not affect the validity and enforceability of any remaining provisions.</p>
                    <p>11.2. You agree to indemnify and hold harmless Ultrapad, its affiliates, subsidiaries, licensors, and their respective directors, officers, members, managers, employees, and agents from and against any and all claims and expenses arising out of your use of the Services, a breach of any provision of these Terms by you or any person using the Services on your behalf, a breach by you of any applicable laws, or any third-party claim to the extent arising from or connected with an allegation that your use of the Services in accordance with these Terms infringes any rights of a third party.</p>

                    <h3>12. Miscellaneous </h3>
                    <p>12.1. <span>Severability</span>: If a provision of this Agreement is or becomes illegal, invalid, or unenforceable in any jurisdiction, that shall not affect the validity or enforceability in that jurisdiction of any other provision hereof or the validity or enforceability in other jurisdictions of that or any other provision hereof.</p><p>12.2. <span>Assignment</span>: Ultrapad reserves the right to assign this Agreement, in whole or in part, at any time without notice. The User may not assign any of his/her rights or obligations under this Agreement.</p><p>12.3. <span>Third-Party Rights</span>: Unless expressly provided to the contrary in this Agreement, a person who is not a party to this Agreement has no right to enforce or to enjoy the benefit of any term of this Agreement. Notwithstanding any term of this Agreement, no consent of any party who is not a party to this Agreement shall be required for the waiver, variation, or termination of any part of this Agreement.</p><p>12.4. <span>Support and Notice</span>: All notices, requests, demands, and determinations for Ultrapad under these Terms (other than routine operational communications) shall be sent to [<a className='text-links' href="mailto:support@Ultrapad.io">support@Ultrapad.io</a>].</p>

>>>>>>> 4d50ca2947281432549f03467590380a621eb55c
                </div>
                </div>
            </div>
        </>
    )
}

export default Privacy
