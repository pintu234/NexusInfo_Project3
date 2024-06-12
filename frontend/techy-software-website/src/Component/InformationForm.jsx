import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InformationForm.css";

const InformationForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [feedback, setFeedback] = useState("");

  const collectData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/feedback", {
        method: "POST",
        body: JSON.stringify({ fullName, email, feedback, phoneNumber }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const result = await response.json();
      console.log(result);
      setFullName("");
      setEmail("");
      setFeedback("");
      setPhoneNumber("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="form-group">
      <h4>Feedback Form</h4>
      <form onSubmit={collectData} method="post" className="mt-3">
        <div className="mb-3">
          <label htmlFor="fullName">
            Full Name:
            <input
              className="form-control"
              type="text"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </label>
        </div>
        <br />
        <div className="mb-3">
          <label htmlFor="email">
            Email:
            <input
              className="form-control"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <br />
        <div className="mb-3">
          <label htmlFor="feedback">
            Your Feedback:
            <input
              className="form-control"
              type="text"
              name="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            />
          </label>
        </div>
        <br />
        <div className="mb-3">
          <label htmlFor="phoneNumber">
            Phone Number:
            <input
              className="form-control"
              type="numeric"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </label>
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default InformationForm;
