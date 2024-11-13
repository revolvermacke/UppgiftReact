import React from "react";
import Card from "../assets/images/credit-card.svg";
import Shield from "../assets/images/shield.svg";
import Stats from "../assets/images/stats.svg";
import Support from "../assets/images/support.svg";
import CashBack from "../assets/images/cashback.svg";
import Happy from "../assets/images/happy.svg";
import YourCards from "../assets/images/yourcards.svg";

const AppFeatures = () => {
  return (
    <section id="app-features">
      <div className="container">
        <div className="showcase-app-cards">
          <img src={YourCards} />
        </div>

        <div className="content2">
          <h2 className="headline2">App Features</h2>
          <p className="text2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque
            volutpat ligula est. Mattis fermentum, at nec lacus.
          </p>

          <div className="grid-cards">
            <div className="features-cards">
              <div className="container-icon">
                <img src={Card} />
              </div>
              <div>
                <h3>Easy Payments</h3>
                <p>
                  Id mollis consectetur congue egestas egestas suspendisse
                  blandit justo.
                </p>
              </div>
            </div>

            <div className="features-cards">
              <div className="container-icon">
                <img src={Shield} />
              </div>
              <div>
                <h3>Data Security</h3>
                <p>
                  Augue pulvinar justo, fermentum fames aliquam accumsan
                  vestibulum non.
                </p>
              </div>
            </div>

            <div className="features-cards">
              <div className="container-icon">
                <img src={Stats} />
              </div>
              <div>
                <h3>Cost Statistics</h3>
                <p>
                  Mattis urna ultricies non amet, purus in auctor non. Odio
                  vulputate ac nibh.
                </p>
              </div>
            </div>

            <div className="features-cards">
              <div className="container-icon">
                <img src={Support} />
              </div>
              <div>
                <h3>Support 24/7</h3>
                <p>
                  A elementum, imperdiet enim, pretium etiam facilisi in aenean
                  quam mauris.
                </p>
              </div>
            </div>

            <div className="features-cards">
              <div className="container-icon">
                <img src={CashBack} />
              </div>
              <div>
                <h3>Regular Cashback</h3>
                <p>
                  Sit facilisis dolor arcu, fermentum vestibulum arcu elementum
                  imperdiet eleifend.
                </p>
              </div>
            </div>

            <div className="features-cards">
              <div className="container-icon">
                <img src={Happy} />
              </div>
              <div>
                <h3>Top Standards</h3>
                <p>
                  Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus
                  id. Sit facilisis dolor arcu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
