import React from 'react'
import Questions from '../assets/images/questions.svg'
import Calls from '../assets/images/calls.svg'
import FaqList from './FaqList'

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
            <FaqList />
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