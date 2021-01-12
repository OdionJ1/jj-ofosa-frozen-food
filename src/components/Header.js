import React from 'react';
import Sidebar, {SidebarMobile} from './Sidebar';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter'
import adminImg from '../images/admin.png';
import { Link, withRouter } from 'react-router-dom'
import './css/header.scss';
import './css/adminModal.scss';
import './css/quoteModal.scss';

import{ auth } from '../firebase/firebaseUtils'
import { connect } from 'react-redux'

class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            showAdminForm: false,
            showQuoteForm: false,
            adminId: '',
            password: '',
            loginErrorMessage: null
        }
    }

    handleLoginSubmit = async(event) => {
        event.preventDefault();
        let { adminId, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(adminId, password)
                this.setState({ adminId: '', password: '', showAdminForm: false, loginErrorMessage: null })
            } catch (error) {
                console.log(error)
                this.setState({loginErrorMessage: error.message})
            }
    }

    handleChange = (event) => {
        let {name, value} = event.target;
        this.setState({ [name]: value})
    }

    signOut = () => {
        auth.signOut()
        this.props.history.push('/')
    }

    render(){
        return(
            <header className="navbar navbar-default navbar-static-top fixed-top">
                <div className="sideNav">
                    <Sidebar />
                </div>

                <div className= "sideNavMobile">
                    <SidebarMobile />
                </div>

                <div title="Home" className = "leftNav">
                    J.J. OFOSA FROZEN FOOD
                </div>

                {this.props.currentAdmin?
                    <div className="rightNav">
                        <a href="#registerAdminForm" title="Register an admin" className="navbarText">Register as Admin</a>
                        <Link className="navbarText" to="/stockpage/administrator" >View stock and prices</Link>
                        <span onClick={() => this.signOut()} className="navbarText">Sign out</span>
                    </div> 
                    :
                    <div className="rightNav">
                        <span className="navbarText" onClick={() => this.setState({showQuoteForm: true})}><i className="fa fa-file-text-o"></i>Get Quote</span>
                        <a className="navbarText" href="tel:07032292277"><i className="fa fa-phone-alt e-btn e-link"></i>Call now</a>
                        <a className="navbarText" href="https://goo.gl/maps/MD4XRrbefTUcnwwa6"><i className="fa fa-map-marker"></i>Get Directions</a>
                        <Link className="navbarText" to="/stockpage" >View stock and prices</Link>
                        <i onClick={() => this.setState({showAdminForm: true})} title="Administrator sign in" className="fas fa-user-lock"></i>
                    </div>
                }

                
                
                {/* Admin form modal */}
                <Modal show={this.state.showAdminForm} onHide={() => this.setState({showAdminForm: false})}>
                <ModalHeader className="modalHeader"></ModalHeader>
                    <ModalBody >
                        <div className="adminImg">
                            <img src={adminImg} alt=""/>
                            {this.state.loginErrorMessage?
                                <span style={{color: 'red'}}>*{this.state.loginErrorMessage}*</span> : ''
                            }
                        </div>
                        <form className="loginForm" onSubmit={this.handleLoginSubmit}>
                            <label>Admin ID: </label>
                            <input name="adminId" value={this.state.adminId} onChange={this.handleChange} placeholder="Admin ID" type="text" required />
                        <label>Password: </label>
                            <input name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" type="password" required/>
                            <button>Login</button>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <div className = "modalFooter">
                            <button onClick={() => this.setState({showAdminForm: false})}>Cancel</button>
                            <a href="/">Forgot password?</a>
                        </div>
                    </ModalFooter>
                </Modal>

                {/* Quote form modal */}
                <Modal show={this.state.showQuoteForm} onHide={() => this.setState({showQuoteForm: false})}>
                    <ModalHeader closeButton>
                        <p className="modalHeader">Get quote</p>
                    </ModalHeader>
                    <ModalBody>
                        <form className="quoteForm">
                            <div className="quoteForm__group">
                                <input type="text" className="input__field" placeholder="Name" name="name" id="name" required />
                                <label htmlFor="name" className="input__label">Name</label>
                            </div>
                            <div className="quoteForm__group">
                                <input type="text" className="input__field" placeholder="Phone number" name="phone number" id="phoneNumber" required />
                                <label htmlFor="phoneNumber" className="input__label">Phone number</label>
                            </div>
                            <div className="quoteForm__group">
                                <input type="email" className="input__field" placeholder="Email" name="email" id="email" required />
                                <label htmlFor="email" className="input__label">Email</label>
                            </div>
                            <div className="quoteForm__group">
                                <textarea 
                                type="text" 
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
            </header>
        )
    }
}

const mapStateToProps = ({admin: {currentAdmin}}) => ({
    currentAdmin
})

export default connect(mapStateToProps)(withRouter(Header))

