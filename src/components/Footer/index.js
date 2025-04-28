import React from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon } from '~/components/Icon';
import Button from '../Button';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.top}>
                    <div className={styles.logo}>
                        <img src="https://themesflat.co/html/proty/images/logo/logo-2@2x.png" alt="LogoFooter" />
                    </div>

                    <div className={styles.contact}>
                        <div className={styles.contactItem}>
                            <PhoneIcon />
                            <div className={styles.content}>
                                <p>Call us</p>
                                <Link to="/">(603) 555-0123</Link>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <MailIcon />
                            <div className={styles.content}>
                                <p>Nee live help</p>
                                <Link to="/">proty-support@gmail.com</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.container}>
                    <div className={styles.section}>
                        <h3>About us</h3>
                        <ul>
                            <li>Contact</li>
                            <li>Why choose us?</li>
                            <li>Customer reviews</li>
                            <li>Our team</li>
                            <li>Careers with realty</li>
                            <li>Work with us</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h3>Popular house</h3>
                        <ul>
                            <li>#Penthouses</li>
                            <li>#Villa</li>
                            <li>#Smart home</li>
                            <li>#Apartments</li>
                            <li>#Office</li>
                            <li>#Bungalow</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h3>Quick links</h3>
                        <ul>
                            <li>Terms of use</li>
                            <li>Privacy policy</li>
                            <li>Our services</li>
                            <li>Contact support</li>
                            <li>Pricing plans</li>
                            <li>FAQs</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h3>Newsletter</h3>
                        <p>Sign up to receive the latest articles</p>
                        <form>
                            <input type="email" placeholder="Your email address" required />
                            <label>
                                <input type="checkbox" /> I have read and agree to the terms & conditions
                            </label>
                            <Button size="large" variant="primary">
                                SUBSCRIBE
                            </Button>
                        </form>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>
                        Copyright © 2024 <strong>PROTY - REAL ESTATE</strong>. Designed & Developed by Themesflat
                    </p>
                    <div className={styles.socials}>
                        <span>Follow Us</span>
                        <div className={styles.boxIcon}>
                            <Link to="/">
                                <i className={`icon ${styles.iconFacebook}`}></i>
                            </Link>
                            <Link to="/">
                                <i className={`icon ${styles.iconX}`}></i>
                            </Link>
                            <Link to="/">
                                <i className={`icon ${styles.iconIn}`}></i>
                            </Link>
                            <Link to="/">
                                <i className={`icon ${styles.iconInstagram}`}></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

// import React from 'react';
// import styles from './Footer.module.scss';

// const Footer = ({ aboutLinks, popularLinks, quickLinks, newsletterText }) => {
//     return (
//         <footer className={styles.footer}>
//             <div className={styles.container}>
//                 {/* About us */}
//                 <div className={styles.section}>
//                     <h3>About us</h3>
//                     <ul>
//                         {aboutLinks.map((link, index) => (
//                             <li key={index}>{link}</li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Popular house */}
//                 <div className={styles.section}>
//                     <h3>Popular house</h3>
//                     <ul>
//                         {popularLinks.map((link, index) => (
//                             <li key={index}>{link}</li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Quick links */}
//                 <div className={styles.section}>
//                     <h3>Quick links</h3>
//                     <ul>
//                         {quickLinks.map((link, index) => (
//                             <li key={index}>{link}</li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Newsletter */}
//                 <div className={styles.section}>
//                     <h3>Newsletter</h3>
//                     <p>{newsletterText}</p>
//                     <form>
//                         <input type="email" placeholder="Your email address" required />
//                         <label>
//                             <input type="checkbox" /> I have read and agree to the terms & conditions
//                         </label>
//                         <button type="submit">SUBSCRIBE</button>
//                     </form>
//                 </div>
//             </div>

//             <div className={styles.bottom}>
//                 <p>
//                     Copyright © 2024 <strong>PROTY - REAL ESTATE</strong>. Designed & Developed by Themesflat
//                 </p>
//             </div>
//         </footer>
//     );
// };

// export default Footer;
