import React from 'react'
import AppleLogo from '../assets/images/apple.svg'
import GoogleLogo from '../assets/images/google-play.svg'
import AppleLogoDark from '../assets/images/appledark.svg'
import GoogleLogoDark from '../assets/images/googledark.svg'
import Back from '../assets/images/back.svg'
import Front from '../assets/images/front.svg'

const Hero = () => {
  return (
    <section id="hero">
        <div className="container">
            <div className="headline">
                <h1>Manage All Your Money in One App</h1>
            </div>
            <div className="content">
                <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>

                <div className="buttons">
                    <a className="btn-getapp darkhide-imgs" href="#"><img src={AppleLogo} /></a>
                    <a className="btn-getapp darkhide-imgs" href="#"><img src={GoogleLogo} /></a>
                    <a className="btn-getapp dark-display" href="#"><img src={AppleLogoDark} /></a>
                    <a className="btn-getapp dark-display" href="#"><img src={GoogleLogoDark} /></a>
                </div>

                <a href="#" className="discover-more">
                    <span className="btn-circle btn-darkmode">
                        <i className="fa-solid fa-chevron-down"></i>
                    </span>
                    <span className="darklight-span">Discover more</span>
                </a>
            </div>

            <div className="images">
                <img className="back" src={Back} />
                <img className="front" src={Front} />
            </div>
        </div>
    </section>
  )
}

export default Hero