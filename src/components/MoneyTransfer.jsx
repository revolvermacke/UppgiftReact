import React from "react";
import CheckMark from "../assets/images/purple check.svg";
import MonthTransfer from "../assets/images/month-transfer.svg";
import VisaPopp from "../assets/images/visapopps.svg";
import CreditCard from "../assets/images/credit-card.svg";
import CashBack from "../assets/images/cashback.svg";

const MoneyTransfer = () => {
  return (
    <section id="part-for-desktop">
      <div className="container">
        <div className="upper">
          <div className="headline4">
            <h2>
              Make your money <br /> transfer simple and clear
            </h2>
            <ul className="banking">
              <li>
                <img src={CheckMark} />
                Banking transactions are free for you
              </li>
              <li>
                <img src={CheckMark} />
                No monthly cash commission
              </li>
              <li>
                <img src={CheckMark} />
                Manage payments and transactions online
              </li>
            </ul>
            <a id="sign-in" href="#" className="btn-primary">
              <span>Learn more</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div>
            <img src={MonthTransfer} />
          </div>
        </div>

        <div className="lower">
          <div>
            <img src={VisaPopp} />
          </div>

          <div className="headline5">
            <div>
              <h2>
                Receive payment from <br /> international bank details
              </h2>
            </div>

            <div className="rowcards">
              <div className="make-money-cards">
                <div className="container-icon">
                  <img src={CreditCard} />
                </div>
                <div>
                  <p>
                    Manage your payments online. Mollis congue egestas egestas
                    fermentum fames.
                  </p>
                </div>
              </div>
              <div className="make-money-cards">
                <div className="container-icon">
                  <img src={CashBack} />
                </div>
                <div>
                  <p>
                    A elementur and imperdiet enim, pretium etiam facilisi
                    aenean quam mauris.
                  </p>
                </div>
              </div>
            </div>

            <a id="sign-in" href="#" className="btn-primary">
              <span>Learn more</span>
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyTransfer;
