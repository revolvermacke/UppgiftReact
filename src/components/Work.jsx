import React from 'react'
import Middle from '../assets/images/middle.svg'
import ComponentMobile from '../assets/images/Component-mobiles.svg'
import Left from '../assets/images/left.svg'
import Right from '../assets/images/right.svg'

const Work = () => {
  return (
    <section id="work">

        <div className="container">

            <div className="headline3">
                <h2>How Does It Work?</h2>
            </div>

            <div className="mobile-first">

                <div className="phone-mobile">
                    <img src={Middle} />
                </div>

                <div className="headline-mobile">
                    <h3>Transfers to people from <br /> your contact list</h3>
                    <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                </div>

            </div>
            
            <div className="tablet-first">

                <div className="phones-tablet">
                    <div id="left-tablet">
                        <img src={ComponentMobile} />
                    </div>
                </div>
                
                <div className="headline-tablet">
                    <h3>Step 3. Transfers to people from your <br /> contact list</h3>
                    <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices. <br /> Pellentesque volutpat ligula est. Mattis fermentum, at nec <br /> lacus.</p>
                </div>

            </div>

            <div className="desktop-first">

                <div className="phones-desktop">
                    <div id="left-right">
                        <img src={Left} />
                    </div>

                    <div id="middle-phone">
                        <img src={Middle} />
                    </div>

                    <div id="left-right">
                        <img src={Right} />
                    </div>

                </div>
                
                <div className="headline-desktop">
                    <h3>Latest transaction history</h3>
                    <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique <br /> quisque hac in consectetur condimentum.</p>
                </div>
            </div>


        </div>

    </section>
  )
}

export default Work