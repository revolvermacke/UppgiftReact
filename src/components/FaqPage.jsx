import React from 'react'
import Questions from '../assets/images/questions.svg'
import Calls from '../assets/images/calls.svg'

const FaqPage = () => {
  return (
    <section id="faq-page">

        <div className="container">

            <div className="head-content">
                <h2>Any questions? <br /> Check out the FAQs</h2>
                <p>Still have unanswered questions and need to </p>
                <p>get in touch?</p>
            </div>

            

            <div id="phone-mess">

                <div className="questions">
                    <div className="border">
                        <img src={Questions} />
                        <p>Still have  questions?</p>
                        <a href="#">Contact us <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className="calls">
                    <div className="border">
                        <img src={Calls} />
                        <p>Don't like phone calls? </p>
                        <a href="#">Contact us <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>

            </div>


            <div className="faq-boxes">

                <div id="mobile-shows">
                    <div className="hb">
                        <h3>Is any of my personal information <br /> stored in the App?</h3>
                        <a href="#" className="discover-more">
                            <span className="btn-circle3 btn-darkmode">
                                <i className="fa-solid fa-chevron-up"></i>
                            </span>
                        </a>
                    </div>

                    
                    <div className="paragraph">
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                        <p>Ornare senectus fusce dignissim ut. Integer consequat in eu tortor, faucibus et lacinia posuere. Turpis sit viverra lorem suspendisse lacus aliquam auctor vulputate. Quis egestas aliquam nunc purus lacus, elit leo elit facilisi. Dignissim amet adipiscing massa integer.</p>
                    </div>
                </div>
                
                <div id="desktop-over" className="hb">
                    <h3>Is any of my personal information stored in the App?</h3>
                    <a href="#" className="discover-more">
                        <span className="btn-circle2 btn-darkmode">
                            <i className="fa-solid fa-chevron-down"></i>
                        </span>
                    </a>
                </div>

                <div id="mobile-hides" className="hb">
                    <h3>Is any of my personal information stored in the App?</h3>
                    <a href="#" className="discover-more">
                        <span className="btn-circle2 btn-darkmode">
                            <i className="fa-solid fa-chevron-down"></i>
                        </span>
                    </a>
                </div>

                <div className="hb">
                    <h3>What formats can I download my transaction history in?</h3>
                    <a href="#" className="discover-more">
                        <span className="btn-circle2 btn-darkmode">
                            <i className="fa-solid fa-chevron-down"></i>
                        </span>
                    </a>
                </div>

                <div id="desktop-shows">
                    <div>
                        <h3>Can I schedule future transfers?</h3>
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                    </div>
                    <div>
                        <a className="buttis discover-more" href="#">
                            <span className="btn-circle3">
                                <i className="fa-solid fa-chevron-up"></i>
                            </span>
                        </a>
                    </div>
                </div>

                <div id="desktop-hides" className="hb">
                    <h3>When can I use Banking App services?</h3>
                    <a href="#" className="discover-more">
                        <span className="btn-circle2 btn-darkmode">
                            <i className="fa-solid fa-chevron-down"></i>
                        </span>
                    </a>
                </div>

                <div id="format-td" className="hb">
                    <h3>When can I use Banking App services?</h3>
                    <a href="#" className="discover-more">
                        <span className="btn-circle2 btn-darkmode">
                            <i className="fa-solid fa-chevron-down"></i>
                        </span>
                    </a>
                </div>

                <div id="format-mobile" className="hb">
                    <h3>Can I schedule future transfers?</h3>
                    <a href="#" className="discover-more">
                        <span className="btn-circle2 btn-darkmode">
                            <i className="fa-solid fa-chevron-down"></i>
                        </span>
                    </a>
                </div>

                <div className="hb">
                    <h3>Can I create my own password that is easy for me to remember?</h3>
                    <a href="#" className="discover-more">
                        <span className="btn-circle2 btn-darkmode">
                            <i className="fa-solid fa-chevron-down"></i>
                        </span>
                    </a>
                </div>

                <div id="last-spalt" className="hb">
                    <h3>What happens if I forget or lose my password?</h3>
                    <a href="#" className="discover-more">
                        <span className="btn-circle2 btn-darkmode">
                            <i className="fa-solid fa-chevron-down"></i>
                        </span>
                    </a>
                </div>

            </div>

            <div className="btn-mid-mobile">
                <a id="contact-btn" href="#" className="btn-primary">
                    <span>Contact us now</span>
                </a>
            </div>

        </div>

    </section>
  )
}

export default FaqPage