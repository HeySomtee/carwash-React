import React, { Component } from 'react'
import image1 from './assets/logo.png'
import image2 from './assets/image2.jpg'
import sub1 from './assets/sub1.jpg'
import sub2 from './assets/sideImage.jpg'
import sub3 from './assets/sub3.jpg'
import sub4 from './assets/sub4.jpg'
import map from './assets/mapp.png'

export class Home extends Component {
  render() {
    return (
      <div className='root'>
        <nav>
            <h3>ShinyCar</h3>
            <ul>
                <li>Prices</li>
                <li>Gallery</li>
                <li>Team</li>
                <li>*****</li>
            </ul>

            <span>
                <a href="#">+243 810 043 567</a>
            </span>
        </nav>
        <div className="container">
            <div className="board">
                <div className='grid'>
                    <div>
                        <h2 className='open'>Open</h2>
                        <p>Mon - Fri <span><b>10:00am - 9:00pm</b></span></p>
                        <p>sat - sun <span><b>closed</b></span></p>
                    </div>
                </div>
                <div className='image-section'>
                    <img src={image1} alt="" />
                </div>

                <div className='title'>
                    <h1>Best Car Wash <br /> in Nsukka, Enugu</h1>
                    <p>Your car will shine like never before</p>
                    <button>save our location</button>
                </div>

            </div>
        </div>

        <div className='page2'>
            <img src={image2} alt="" />
            <div>
                <h1>Washing your cars since 2001</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis enim deserunt nobis. Harum sequi atque adipisci ex temporibus, sunt quidem, minus voluptates vel ipsam doloribus dolor enim ipsa nisi ratione.</p>
                <p><button>Learn more</button></p>
            </div>
        </div>

        <div className='page3'>
            <div className='packages'>
                <h1>Service Packages for everyone</h1>
                <div className='category-div'>
                    <div>
                        <h2 className='b-border'>Basic Wash <span>$20</span></h2>
                        <ul>
                            <li>Extensive wash</li>
                            <li>Hand Drying </li>
                            <li>Tire and wheel Cleaning</li>
                            <li>Windows and Mirrors</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='b-border'>Standard Wash <span>$50</span></h2>
                        <ul>
                            <li>Extensive wash</li>
                            <li>Hand Drying </li>
                            <li>Tire and wheel Cleaning</li>
                            <li>Windows and Mirrors</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='o-border'>Deluxe Wash <span>$100</span></h2>
                        <ul>
                            <li>Extensive wash</li>
                            <li>Hand Drying </li>
                            <li>Tire and wheel Cleaning</li>
                            <li>Windows and Mirrors</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='o-border'>Premium Wash <span>$130</span></h2>
                        <ul>
                            <li>Extensive wash</li>
                            <li>Hand Drying </li>
                            <li>Tire and wheel Cleaning</li>
                            <li>Windows and Mirrors</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className='page4'>
            <div className='grid-view'>
                <div className='gal'>
                    <h1>This is our car wash</h1>
                    <img src={sub2} alt="" />
                </div>

                <div className='gallery'>
                    <img src={sub1} alt="" />
                    <img src={image2} alt="" />
                    <img src={sub3} alt="" />
                    <img src={sub4} alt="" />
                </div>
            </div>
        </div>

        <div className='page5'>
            <div className='map-div'>
                <img src={map} alt="" />
            </div>

            <div className='copR'>
                <span className='contact'>ShinyCar</span>
                <span>location <br /> <br /> 1274 Univ. Market road <br /> 545 Ukuta close, UNN</span>
                <span className='contact'>
                    contact <br />
                    <a href="#">ilosomto2003@gmail.com</a>
                    <br />
                    <a href="tel:+">07089278732</a>
                </span>
                <span>
                    opening hours <br />
                    Mon - Fri: 10:00am - 09:pm 
                    <br /> <br />
                    Sat - Sun <br />
                    closed
                </span>

                <div
                    className='cc'
                >
                    <span>©2022 somtee- all rights reserved</span>
                    <span>Made by Somtee</span>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Home