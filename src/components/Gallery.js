import React, {useEffect} from 'react';
import './css/gallery.scss'
import Aos from 'aos';
import 'aos/dist/aos.css'
import galleryImg1 from '../images/1.jpg'
import galleryImg2 from '../images/2.jpg'
import galleryImg3 from '../images/13.jpg'
import galleryImg4 from '../images/14.jpg'
import galleryImg5 from '../images/18.jpg'
import galleryImg6 from '../images/16.png'
import galleryImg7 from '../images/15.png'
import galleryImg8 from '../images/4.jpg'
import galleryImg9 from '../images/3.jpg'

export default function Gallery() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div id="gallerySection">
            <div className= 'new-section'>
                <hr/>
                <h6>GALLERY</h6>
            </div>
            <div data-aos= "fade-up" className= "gallery">
                <img data-aos= "fade-up" src={galleryImg1} className = "galleryImg1" alt=""/>
                <img data-aos= "fade-right" src={galleryImg2} alt=""/>
                <img data-aos= "fade" src={galleryImg3} alt=""/>
                <img data-aos= "flip-right" src={galleryImg4} alt=""/>
                <img data-aos= "fade-down-right" src={galleryImg6} alt=""/>
                <img data-aos= "slide-right" src={galleryImg7} alt=""/>
                <img data-aos= "flip-left" src={galleryImg5} alt=""/>
                <img data-aos= "slide-right" src={galleryImg8} alt=""/>
                <img data-aos= "fade-down" src={galleryImg9} alt=""/>
            </div>
        </div>
    )
}
