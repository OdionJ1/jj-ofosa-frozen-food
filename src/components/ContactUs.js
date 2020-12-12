import React, {useEffect} from 'react'
import Aos from 'aos';
import Map from './Map'
import './css/contactUs.scss'

export default function ContactUs() {
    useEffect(() => {
        Aos.init({})
    }, [])
    return (
        <div>
            <div className= "new-section">
                <hr/>
                <h6>CONTACT</h6>
            </div>

            <Map />

            <div id="contactSection" className= "ourInfo">
                <div className= "contact">
                    <h5>Contact</h5>
                    <button className="button"><a href="tel:07032292277">CALL NOW</a></button>
                    <p data-aos= "fade-right" data-aos-duration="1000" className="phoneNo info">0703 229 2277</p>
                </div>
                
                <div className= "location">
                    <h5>Address</h5>
                    <button className="button"><a href="https://goo.gl/maps/WM7ptAK6YmfzpLq77">GET DIRECTIONS</a></button>
                    <p data-aos= "fade-right" data-aos-duration="2000" className="address info">Shop 28 Abiodun Jagun street, POWA shopping complex, Ogba, Lagos, Nigeria</p>
                </div>
                
                <div className= "business-hours">
                    <h5>Business Hours</h5>
                    <div className="hours info">
                        <p data-aos= "fade-up" data-aos-duration="700">Mon: 8:00 AM - 10:00 PM</p>
                        <p data-aos= "fade-up" data-aos-duration="1000">Tue: 8:00 AM - 10:00 PM</p>
                        <p data-aos= "fade-up" data-aos-duration="1300">Wed: 8:00 AM - 10:00 PM</p>
                        <p data-aos= "fade-up" data-aos-duration="1600">Thu: 8:00 AM - 10:00 PM</p>
                        <p data-aos= "fade-up" data-aos-duration="2000">Fri: 8:00 AM - 10:00 PM</p>
                        <p data-aos= "fade-up" data-aos-duration="2300">Sat: 8:00 AM - 10:00 PM</p>
                        <p data-aos= "fade-up" data-aos-duration="2600">Sun: 8:00 AM - 4:00 PM</p>
                    </div>
                </div>
            </div>
            <hr id="registerAdminForm" className="line"/>
            <div className= "credits">
                <p><i className="fas fa-code"></i>Developer: Odion Asuelimen<i className="fas fa-code"></i></p>
            </div>
        </div>
    )
}
