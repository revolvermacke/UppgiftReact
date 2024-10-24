import React from 'react'
import Bell from '../assets/images/bell.svg'

const SubscribePage = () => {
  return (
    <section id="subscribe">

        <div className="container">

            <div className="notification">

                <div className="img-bell">
                    <img src={Bell} />
                </div>

                <div className="d-show">
                    <h2>Subscribe to our newsletter to stay <br /> informed about latest updates</h2>
                </div>

                <div className="d-hide">
                    <h2>Subscribe to our <br /> newsletter</h2>
                </div>

            </div>
            
            <div className="sub-bar">
                
                <div className="input-group">
                    <input className="form-input email" type="email" placeholder="Your Email" />
                    <button className="btn-sub">subscribe</button>
                </div>

            </div>

        </div>

    </section>
  )
}

export default SubscribePage