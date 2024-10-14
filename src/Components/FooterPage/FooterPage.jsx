import React from 'react';
import { Link } from 'react-router-dom';
import './FooterPage.css'; 
import mfb from '../../assets/mfb.svg'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoWaterOutline } from "react-icons/io5";



const FooterPage = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
            <div className="footer-content">
                <div className="footer-logo-section">
                    <img src={mfb} alt="First Multiple MFB" className="footer-logo" />
                    <p>FIRST MULTIPLE MFB - A leading and contemporary microfinance bank. Registered 5th September, 2008 and licensed by the Central Bank of Nigeria...</p>
                </div>

                <div className="footer-links">
                    <div className='footer-text'>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">E Channel Services</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                        </ul>
                    </div>

                    <div className='footer-text'>
                        <h4>Why Choose Us</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/team">Our Team</Link></li>
                            <li><Link to="/business-plan">Our Business Plan</Link></li>
                        </ul>
                    </div>

                    <div className='footer-text'>
                        <h4>Products</h4>
                        <ul>
                            <li><Link to="/current-account">FMM Current Account</Link></li>
                            <li><Link to="/savings-account">FMM Savings Account</Link></li>
                            <li><Link to="/contributory">FMM Contributory</Link></li>
                            <li><Link to="/loans">Fixed Deposite Account</Link></li>
                        </ul>
                    </div>
                    <div className='footer-text mt-5'>
                        <ul className="footer-right">
                            <li><Link to="/current-account">FMM Asset Acquisition</Link></li>
                            <li><Link to="/savings-account">LPO Financing</Link></li>
                            <li><Link to="/contributory">Co-Operative Account</Link></li>
                            <li><Link to="/loans">Loan</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-contact-section">
                   <div className="footer-info">
                   <h4>Get in touch</h4>
                    <ul className='info'>
                        <p>
                        <li className='water'> <IoWaterOutline />
                        Suite AB 1 Apo Sparklight Mall <br /> Durumi Area 3, Abuja</li>
                        </p>
                        <p>
                        <li className='phone'> <FaPhoneAlt />+234 708 080 3747 <br /> +234 803 340 7396</li>
                        </p>
                        <p>
                        <li className='email'><Link to="mailto:customerservice@firstmultiplemfb.com"> <MdEmail />customerservice@firstmultiplemfb.com</Link></li>
                        </p>
                    </ul>
                   </div>

                    <div className="footer-socials">
                        <h4>Reach us on our social media</h4>
                        <div className="social-icons">
                            <Link to="/"><FaFacebook /></Link>
                            <Link to="/"><FaTwitter /></Link>
                            <Link to="/">
                            <FaInstagram /></Link>
                            <Link to="/"><FaLinkedinIn />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
             <div className="footer-bottom">
                <p>KoboWeb Group © 2022. All rights reserved. | <Link to="/terms">Terms & Conditions</Link> | <Link to="/privacy">Privacy Policy</Link></p>
            </div>  
        </footer>
    );
};

export default FooterPage;
