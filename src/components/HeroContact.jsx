import React from 'react'
import Breadcrumb from './Breadcrumb'


const HeroContact = () => {
  return (
    <section id="heroContact" class="heroContact bgLightGray">
        <div class="container">

        <Breadcrumb />

            <div class="headPage">
                <div class="contactUs">
                    <h2>Contact Us</h2>

                    <div id="smallCard1" class="smallCard">
                        <div class="roundBack"><img src="./src/assets/images/brev.svg" alt="small letter on the side of email information" /></div>
                        <div class="insideCardContent">
                            <h3 class="emailCareer">Email us</h3>
                            <p class="infoContent">Please feel free to drop us a line. We will <br /> respond as soon as possible.</p>
                            <a href="">Leave a message <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>

                    <div id="smallCard2" class="smallCard">
                        <div class="roundBack"><img src="./src/assets/images/1+1.svg" alt="small user icons with a plus in the middle" /></div>
                        <div class="insideCardContent">
                            <h3 class="emailCareer">Careers</h3>
                            <p class="infoContent">Sit ac ipsum leo lorem magna nunc mattis <br /> maecenas non vestibulum.</p>
                            <a href="">Send an application <i class="fa-solid fa-arrow-right"></i></a> 
                        </div>
                    </div>

                </div>
    
                <form id="consultationForm" class="consultationForm">
                        
                    <h2>Get Online Consultation</h2>
                    <div class="inputGroup">
                        <label for="fullName" class="formLabel">Full name</label>
                        <input type="text" id="fullName" class="formInput" />
                    </div>

                    <div class="inputGroup">
                        <label for="email" class="formLabel">Email address</label>
                        <input type="email" id="email" class="formInput" />
                    </div>

                    <div class="inputGroup">
                        <label for="select" class="formLabel">Specialist</label>
                        <select name="" id="select" class="formInput">
                            <option value=""></option>
                            <option value="">Lorem.</option>
                            <option value="">Lorem, ipsum.</option>
                            <option value="">Lorem, ipsum dolor.</option>
                        </select>
                    </div>

                    <button id="submit-btn" type="submit" class="btn-primary">Make an appointment</button>

                </form>

            </div>

        </div>

    </section>
  )
}

export default HeroContact