import { useState } from "react";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    Specialist: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `The ${name} field is required`,
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const handleOk = () => {
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      if (formData[field].trim() === "") {
        newErrors[field] = `The ${field} is required.`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const res = await fetch(
      "https://win24-assignment.azurewebsites.net/api/forms/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (res.ok) {
      setSubmitted(true);
      setFormData({ fullName: "", email: "", Specialist: "" });
    }
  };

  if (submitted) {
    return (
      <div className="informationsBox">
        <h1>Thanks for reaching out to us!</h1>
        <p>
          We will contact you <br /> as soon as we can.
        </p>
        <button className="btn-close" onClick={handleOk}>
          OK
        </button>
      </div>
    );
  }

  return (
    <form
      id="consultationForm"
      className="consultationForm"
      onSubmit={handleSubmit}
    >
      <h2>Get Online Consultation</h2>
      <div className="inputGroup">
        <label htmlFor="fullName" className="formLabel">
          Full name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="formInput"
        />
        <span className="errorMessage">
          {errors.fullName && errors.fullName}
        </span>
      </div>

      <div className="inputGroup">
        <label htmlFor="email" className="formLabel">
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="formInput"
        />
        <span className="errorMessage">{errors.email && errors.email}</span>
      </div>

      <div className="inputGroup">
        <label htmlFor="select" className="formLabel">
          Specialist
        </label>
        <select
          id="select"
          name="Specialist"
          value={formData.Specialist}
          onChange={handleChange}
          className="formInput"
        >
          <option value="">Select an option</option>
          <option value="Hand surgeon">Hand surgeon</option>
          <option value="Foot surgeon">Foot surgeon</option>
          <option value="Eye surgeon">Eye surgeon</option>
        </select>
        <span className="errorMessage">
          {errors.Specialist && errors.Specialist}
        </span>
      </div>

      <button id="submit-btn" type="submit" className="btn-primary">
        Make an appointment
      </button>
    </form>
  );
};

export default ConsultationForm;
