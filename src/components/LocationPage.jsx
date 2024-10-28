import React from 'react'

import MapPic from '../assets/images/mapPic.svg'
import Pin from '../assets/images/pin.svg'
import PurplePhone from '../assets/images/purpphone.svg'
import Clock from '../assets/images/clock.svg'
import FB from '../assets/images/bxl-facebook-square.svg'
import Twitt from '../assets/images/bxl-twitter.svg'
import Gram from '../assets/images/bxl-instagram-alt.svg'
import YT from '../assets/images/bxl-youtube.svg'

const LocationPage = () => {
  return (
    <section class="location container">

        <div class="mapContainer">
            <img src={MapPic} alt="map from google" />
        </div>

        <div class="medicalCenter">
            <div class="medCenter">
                
                <div>

                    <h3>Medical Center 1</h3>
                    <div class="openingHours">
                        <img src={Pin} alt="location pin" />
                        <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                    </div>

                    <div class="openingHours">
                        <img src={PurplePhone} alt="icon of a phone where it tells phone number" />
                        <p>(406) 555-0120</p>
                    </div>

                    <div class="openingHours clock">
                        <div>
                            <img src={Clock} alt="icon of a phone where it tells phone number" />
                        </div>
                        <div class="hours">
                            <p><strong>Mon - Fri:</strong> 9:00 am - 22:00 am</p>
                            <p><strong>Sat - Sun:</strong> 9:00 am - 20:00 am</p>
                        </div>
            
                    </div>

                </div>

                <div>

                    <h3>Medical Center 2</h3>
                    <div class="openingHours">
                        <img src={Pin} alt="location pin" />
                        <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
                    </div>

                    <div class="openingHours">
                        <img src={PurplePhone} alt="icon of a phone where it tells phone number" />
                        <p>(406) 544-0123</p>
                    </div>

                    <div class="openingHours clock">
                        <div>
                            <img src={Clock} alt="icon of a phone where it tells phone number" />
                        </div>
                        <div class="hours">
                            <p><strong>Mon - Fri:</strong> 9:00 am - 22:00 am</p>
                            <p><strong>Sat - Sun:</strong> 9:00 am - 20:00 am</p>
                        </div>
                    </div>

                </div>

            </div>

            <div class="socialMedias">
                <div id="fb-logo" class="boxlogos">
                    <img src={FB} alt="facebook logo" />
                </div>
                <div id="twitter-logo" class="boxlogos">
                    <img src={Twitt} alt="twitter logo" />
                </div>
                <div id="instagram-logo" class="boxlogos">
                    <img src={Gram} alt="instagram logo" />
                </div>
                <div id="youtube-logo" class="boxlogos">
                    <img src={YT} alt="youtube logo" />
                </div>
            </div>
            
        </div>

    </section>
  )
}

export default LocationPage