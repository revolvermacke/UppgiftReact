import Breadcrumb from "./Breadcrumb";

const HeroContact = () => {
  return (
    <section id="heroContact" className="heroContact bgLightGray">
      <div className="container">
        <Breadcrumb />

        <div className="headPage">
          <div className="contactUs">
            <h2>Contact Us</h2>

            <div id="smallCard1" className="smallCard">
              <div className="roundBack">
                <img
                  src="./src/assets/images/brev.svg"
                  alt="small letter on the side of email information"
                />
              </div>
              <div className="insideCardContent">
                <h3 className="emailCareer">Email us</h3>
                <p className="infoContent">
                  Please feel free to drop us a line. We will <br /> respond as
                  soon as possible.
                </p>
                <a href="">
                  Leave a message <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>

            <div id="smallCard2" className="smallCard">
              <div className="roundBack">
                <img
                  src="./src/assets/images/1+1.svg"
                  alt="small user icons with a plus in the middle"
                />
              </div>
              <div className="insideCardContent">
                <h3 className="emailCareer">Careers</h3>
                <p className="infoContent">
                  Sit ac ipsum leo lorem magna nunc mattis <br /> maecenas non
                  vestibulum.
                </p>
                <a href="">
                  Send an application{" "}
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <form id="consultationForm" className="consultationForm">
            <h2>Get Online Consultation</h2>
            <div className="inputGroup">
              <label htmlFor="fullName" className="formLabel">
                Full name
              </label>
              <input type="text" id="fullName" className="formInput" />
            </div>

            <div className="inputGroup">
              <label htmlFor="email" className="formLabel">
                Email address
              </label>
              <input type="email" id="email" className="formInput" />
            </div>

            <div className="inputGroup">
              <label htmlFor="select" className="formLabel">
                Specialist
              </label>
              <select name="" id="select" className="formInput">
                <option value=""></option>
                <option value="">Lorem.</option>
                <option value="">Lorem, ipsum.</option>
                <option value="">Lorem, ipsum dolor.</option>
              </select>
            </div>

            <button id="submit-btn" type="submit" className="btn-primary">
              Make an appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroContact;
