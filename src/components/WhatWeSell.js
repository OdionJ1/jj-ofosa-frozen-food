import React, {useEffect} from 'react'
import Aos from 'aos';
import './css/whatWeSell.scss'
import ourProductsImg1 from '../images/chicken.jpg'
import ourProductsImg2 from '../images/kote.jpg'
import ourProductsImg3 from '../images/turkey.jpg'
import ourProductsImg4 from '../images/food-Items.jpg'

export default function WhatWeSell() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div id="whatWeSellSection">
            <div className= 'new-section'>
                <hr/>
                <h6>WHAT WE SELL</h6>
            </div>

            <div data-aos= "flip-up" className= "ourProductsImg">
                <div className= "img-div">
                    <a href="/">
                    <img src={ourProductsImg1} alt=""/>
                    <div className= "text-div">
                        <div className= "img-text">Chicken</div>
                    </div>
                    </a>
                </div>

                <div className= "img-div">
                    <a href="/">
                    <img src={ourProductsImg2} alt=""/>
                    <div className= "text-div">
                        <div className= "img-text">Fish</div>
                    </div>
                    </a>
                </div>

                <div className= "img-div">
                    <a href="/">
                    <img src={ourProductsImg4} alt=""/>
                    <div className= "text-div">
                        <div className= "img-text">Food Items</div>
                    </div>
                    </a>
                </div>

                <div style= {{marginTop: '1em'}} className= "img-div">
                    <a href="/">
                    <img src={ourProductsImg3} alt=""/>
                    <div className= "text-div">
                        <div className= "img-text">Turkey</div>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
