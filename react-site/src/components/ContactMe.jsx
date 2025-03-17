import React, { useState } from "react";
import ExplorerWindow from "./ExplorerWindow";
import emailjs from "emailjs-com";
import "../styles/contactMe.css"; 

const ContactMe = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(() => {
        setStatusMessage("Email was successfully sent!");
        setIsError(false);
        setIsLoading(false);
      })
      .catch(() => {
        setStatusMessage("Error sending email. Please try again.");
        setIsError(true);
        setIsLoading(false);
      });
  };

  return (
    <ExplorerWindow title="Contact Me" onClose={onClose}>
      <div className="contact-content">
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>

          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>

          <label>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required />
          </label>

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>

        {statusMessage && (
          <div className={`status-message ${isError ? "error" : "success"}`}>
            {statusMessage}
          </div>
        )}
      </div>
    </ExplorerWindow>
  );
};

export default ContactMe;