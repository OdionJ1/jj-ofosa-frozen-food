import React, {useState} from 'react'
import SideNav from 'react-simple-sidenav';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody';
import './css/quoteModal.scss';

let styles = {
  color: '#2462d4',
  cursor: 'pointer'
}

let styles2 = {
  color: '#2462d4',
  textDecoration: 'none'
}

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    const navItems = [
      <a style={styles2} href="#updatesSection">
        Updates
      </a>,
      <a style={styles2} href="#testimonialSection">
        Testimonial
      </a>,
      <a style={styles2} href="#gallerySection">
        Gallery
      </a>,
      <a style={styles2} href="#whatWeSellSection">
        What we sell
      </a>,
      <a style={styles2} href="#contactSection">
        Contact
      </a>,
    ];

    return (
      <div>
        <div>
        {showNav? <span onClick= {() => setShowNav(false)}><i style={styles} className= "fa fa-times"></i></span>
         : 
        <span onClick={() => setShowNav(true)}><i style={styles} className= "fa fa-navicon"></i></span>}
        <SideNav 
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
        style= {{marginTop: '3em'}}
        navStyle = {{width: '15em', paddingTop: '3em'}}
        items={navItems}
        titleStyle={{display: 'none'}}
        itemStyle={{ 
            fontSize: '17px', 
            listStyleType: 'none',
            color: '#2462d4',
            padding: '0.5em'
        }}
        itemHoverStyle={{ color: 'gray', fontSize: '19px' }}
        />
        </div>
      </div>
    );
};

const SidebarMobile = () => {
  const [showNav, setShowNav] = useState(false);
  let [showQuoteForm, setShowQuoteForm] = useState(false);

  const navItemsMobile = [
    <span style={styles2} onClick={() => setShowQuoteForm(true)}>
      Get quote
    </span>,
    <a style={styles2} href="tel:07032292277">
      Call now
    </a>,
    <a style={styles2} href="https://goo.gl/maps/WM7ptAK6YmfzpLq77">
      Get Directions
    </a>,
    <a style={styles2} href="/">
      View stock and prices
    </a>
  ];

  return (
    <div>
      <div>
      {showNav? <span onClick= {() => setShowNav(false)}><i style={styles} className= "fa fa-times"></i></span>
       : 
      <span onClick={() => setShowNav(true)}><i style={styles} className= "fa fa-navicon"></i></span>}
      <SideNav 
      showNav={showNav}
      onHideNav={() => setShowNav(false)}
      style= {{marginTop: '3em'}}
      navStyle = {{width: '15em', paddingTop: '3em'}}
      items={navItemsMobile}
      titleStyle={{display: 'none'}}
      itemStyle={{ 
          fontSize: '17px', 
          listStyleType: 'none',
          color: '#2462d4',
          padding: '0.5em'
      }}
      itemHoverStyle={{ color: 'gray' }}
      />
      </div>
      {/* Quote form modal */}
      <Modal show={showQuoteForm} onHide={() => setShowQuoteForm(false)}>
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
    </div>
  );
};


export default Sidebar
export { SidebarMobile }
