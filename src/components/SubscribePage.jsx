import React, { useState } from "react";
import Bell from "../assets/images/bell.svg";

const SubscribePage = () => {
  // State för att lagra e-postadressen
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "https://win24-assignment.azurewebsites.net/api/forms/subscribe",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    console.log(res.status);

    if (!res.ok) {
      const data = await res.json();
      console.log(data);
      setMessage(data.message || "Misslyckades med att prenumerera.");

      setTimeout(() => setMessage(''), 2000);
      return;
    }

    setMessage("Tack för din prenumeration!");
    setEmail("");

    setTimeout(() => setMessage(''), 2000);
  };

  return (
    <section id="subscribe">
      <div className="container">
        <div className="notification">
          <div className="img-bell">
            <img src={Bell} alt="Notification Bell" />
          </div>
          <div className="d-show">
            <h2>
              Subscribe to our newsletter to stay <br /> informed about latest
              updates
            </h2>
          </div>
          <div className="d-hide">
            <h2>
              Subscribe to our <br /> newsletter
            </h2>
          </div>
        </div>
        <form className="sub-bar" onSubmit={handleSubmit} noValidate>
          {message && <p className="message">{message}</p>}
          <div className="input-group">
            <input
              className="form-input email"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn-sub" type="submit">
              subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SubscribePage;
