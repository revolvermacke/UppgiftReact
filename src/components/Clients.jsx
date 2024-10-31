import React, { useEffect, useState } from "react";
import Quotes from "../assets/images/quotes.svg";
import Rating4 from "../assets/images/rating1.svg";
import Rating5 from "../assets/images/rating2.svg";
import Fannie from "../assets/images/fannie.svg";
import Abbe from "../assets/images/abbe.svg";

const Clients = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(
          "https://win24-assignment.azurewebsites.net/api/testimonials"
        );
        const data = await res.json();
        console.log(data);
        setTestimonials(data);
      } catch (error) {
        console.error("Error! Det gick inte att hämta testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

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
            <h2>
              Clients are <br /> Loving Our App
            </h2>
          </div>

          <div className="reviews">
            {testimonials.map((testimonial, index) => (
              <div className="review-box" key={index}>
                <img
                  src={testimonial.starRating >= 5 ? Rating5 : Rating4}
                  alt="Rating"
                />
                <p>{testimonial.comment}</p>
                <div className="users">
                  <img
                    src={testimonial.avatarUrl}
                    alt={`${testimonial.author}'s profile`}
                  />
                  <div>
                    <h3>{testimonial.author}</h3>
                    <p>{testimonial.jobRole}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
