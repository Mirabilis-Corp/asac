import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faYoutube, faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faMapMarkerAlt, faHome, faPhone, faAt} from '@fortawesome/free-solid-svg-icons';
import Lang from "../lang";

export default function ({lang}) {

    const [email, setEmail] = useState('');

    const onChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div className="app__footer">
            <div className="footer__content">
                <div className="footer__address">
                    <div className="footer__address-item">
                        <span><FontAwesomeIcon icon={faMapMarkerAlt} />&nbsp;&nbsp;</span>
                        <span>{Lang.footer.location[lang]}</span>
                    </div>
                    <div className="footer__address-item">
                        <span><FontAwesomeIcon icon={faHome} />&nbsp;&nbsp;</span>
                        <span><strong>{`BP : `}</strong>{`1136 Douala, ${Lang.footer.cmr[lang]}`}</span>
                    </div>
                    <div className="footer__address-item">
                        <span><FontAwesomeIcon icon={faPhone} />&nbsp;&nbsp;</span>
                        <span><strong>{`${Lang.footer.phone[lang]} : `}</strong> {`(+237) 243 42 06 6`}</span>
                    </div>
                    <div className="footer__address-item">
                        <span><FontAwesomeIcon icon={faAt} />&nbsp;&nbsp;</span>
                        <span><strong>{`Email : `}</strong>{`asac_douala@yahoo.fr`}</span>
                    </div>
                    <div className="social__address">
                        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                    </div>
                </div>
                <div className="footer__menu">
                    <ul>
                        <li><a href="#">{Lang.header.about_us[lang]}</a></li>
                        <li><a href="#">{Lang.header.organisation[lang]}</a></li>
                        <li><a href="#">{Lang.header.our_partners[lang]}</a></li>
                        <li><a href="#">{Lang.header.stat_rapport[lang]}</a></li>
                        <li><a href="#">{Lang.header.magazine[lang]}</a></li>
                        <li><a href="#">{Lang.footer.agenda[lang]}</a></li>
                        <li><a href="#">{Lang.footer.articles[lang]}</a></li>
                    </ul>
                </div>
                <div className="newsletter">
                    <div className="language">
                        {Lang.footer.language[lang]}
                    </div>
                    <div className="form">
                        <h4>{"Newsletter"}</h4>
                        <p>{Lang.footer.newsletter[lang]}</p>
                        <form action="">
                            <input
                                type="email"
                                placeholder={Lang.footer.mail_adr[lang]}
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => onChange(e)}/>
                            <button className="btn btn-primary">{Lang.footer.validate[lang]}</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="copyright">
                ASAC. &copy;Copyright 2021, by DC Corp. {Lang.footer.foot_copy[lang]}
            </div>
        </div>
    );
}
