import React from 'react'
import Updates from './Updates';
import './css/main.scss'
import img from '../images/image1.jpg'
import Testimonials from './Testimonials';
import Gallery from './Gallery'
import WhatWeSell from './WhatWeSell'
import ContactUs from './ContactUs'
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody';
import RegisterAdminForm from './RegisterAdminForm';
import './css/quoteModal.scss';

import { connect } from 'react-redux'

class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            showQuoteForm: false
        }
    }
    
    render(){
        let day = new Date().getDay();
        let time = new Date().getHours();
        let openingTime;

        if(day === 0 && time >= 8 && time < 16){
            openingTime = "Open today until 4pm"
        } else if (day !== 0 && time >= 8 && time < 22){
            openingTime = "Open today until 10pm"
        } else {openingTime = "Closed"}

        return (
            <main className= "text-center">
                <h1 className= "header1">J.J. OFOSA FROZEN FOOD</h1>
                <p>BUY YOUR FOOD STUFF &amp; FROZEN FOODS HERE</p>
                <p>{openingTime}</p>

                <button onClick={() => this.setState({showQuoteForm: true})} className= "getQuoteButton">GET QUOTE</button>
                <div className= "image1">
                    <img src={img} alt="img"/>
                </div>
                <Updates />
                <Testimonials />
                <Gallery />
                <WhatWeSell />
                <ContactUs />

                {/* Quote form modal */}
                <Modal show={this.state.showQuoteForm} onHide={() => this.setState({showQuoteForm: false})}>
                    <ModalHeader closeButton>
                        <p className="modalHeader">Get quote</p>
                    </ModalHeader>
                    <ModalBody>
                        <form className="quoteForm">
                            <div className="quoteForm__group">
                                <input type="input" className="input__field" placeholder="Name" name="name" id="name" required />
                                <label htmlFor="name" className="input__label">Name</label>
                            </div>
                            <div className="quoteForm__group">
                                <input type="input" className="input__field" placeholder="Phone number" name="phone number" id="phoneNumber" required />
                                <label htmlFor="phoneNumber" className="input__label">Phone number</label>
                            </div>
                            <div className="quoteForm__group">
                                <input type="input" className="input__field" placeholder="Email" name="email" id="email" required />
                                <label htmlFor="email" className="input__label">Email</label>
                            </div>
                            <div className="quoteForm__group">
                                <textarea 
                                type="input" 
                                className="textarea__field" 
                                placeholder="I was wondering about availability and rates. I need help with the following:" 
                                name="request" 
                                id="request" required />
                                <label htmlFor="request" className="input__label"></label>
                            </div>
                            <button className="submitButton">Submit</button>
                        </form>
                    </ModalBody>
                </Modal>

                {this.props.currentAdmin?
                    <div className="adminFormDiv">
                        <span>Admin Register Form</span>{""}
                        <p style={{color: 'red'}}>*This admin will have all the permissions you do*</p>
                        <p style={{color: 'red'}}>
                            *On registration you will be signed out and the admin you just registered will be signed in*
                        </p>
                        <RegisterAdminForm />
                    </div> 
                    : ''
                }
                
            </main>
        )
    }
}

const mapStateToProps = ({admin: {currentAdmin}}) => ({
    currentAdmin
})

export default connect(mapStateToProps)(Main)
