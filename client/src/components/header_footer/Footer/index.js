import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faCompass} from '@fortawesome/fontawesome-free-solid';
import {faPhone} from '@fortawesome/fontawesome-free-solid';
import {faClock} from '@fortawesome/fontawesome-free-solid';
import {faEnvelope} from '@fortawesome/fontawesome-free-solid';


const Footer = () => {
    return (
        <footer className="bck_b_dark">
            <div className="container">
                <div className="logo">
                    Waves
                </div>
                <div className="wrapper">
                    <div className="left">
                        <h2>Contact Information</h2>
                        <div className="business_nfo">
                            <div className="tag">
                                <FontAwesomeIcon 
                                    icon={faCompass}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Address</div>
                                    <div>Chamati 15</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon 
                                    icon={faPhone}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Phone</div>
                                    <div>9841 671 999</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon 
                                    icon={faClock}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Workin Hours</div>
                                    <div>9 AM - 8 PM/ Mon - Sun</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon 
                                    icon={faEnvelope}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Email</div>
                                    <div>codeyouridea.nepal@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <h2>Be thr first to know</h2>
                        <div>
                            <div>
                                Get all the latest information on offers, events. You will miss out.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;