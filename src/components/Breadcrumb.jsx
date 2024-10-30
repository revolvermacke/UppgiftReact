import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <div className="homePageContact">
      <Link to="/">
        <i className="fa-solid fa-house"></i>
      </Link>
      <Link to="/">Homepage</Link>
      <span>
        <i className="fa-solid fa-angles-right"></i>
      </span>
      <a href="#" className="contact">
        Contact
      </a>
    </div>
  );
};

export default Breadcrumb;
