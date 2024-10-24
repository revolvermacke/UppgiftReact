import React from 'react'
import Quotes from '../assets/images/quotes.svg'
import Rating4 from '../assets/images/rating1.svg'
import Rating5 from '../assets/images/rating2.svg'
import Fannie from '../assets/images/fannie.svg'
import Abbe from '../assets/images/abbe.svg'

const Clients = () => {
  return (
    <section id="clients">

        <div className="container">

            <div className="grid-clients">

                <div id="q1">
                    <img src={Quotes} />
                </div>

                <div id="q2">
                    <img src={Quotes} />
                </div>

                <div className="headline6">
                    <h2>Clients are <br /> Loving Our App</h2>
                </div>

                <div className="reviews">

                    <div className="review-box">
                        <img src={Rating4} />
                        <p>Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
                        <div  className="users">
                            <img src={Fannie} />
                            <div>
                                <h3>Fannie Summers</h3>
                                <p>Designer</p>
                            </div>
                        </div>

                    </div>

                    <div className="review-box">
                        <img src={Rating5} />
                        <p>Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
                        <div className="users">
                            <img src={Abbe} />
                            <div>
                                <h3>Albert Flores</h3>
                                <p>Developer</p>
                            </div>
                        </div>

                    </div>
                    
                </div>
                
            </div>
            
        </div>
        

    </section>
  )
}

export default Clients