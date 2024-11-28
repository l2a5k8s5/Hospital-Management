import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./ContactUs.css"; // Import the CSS file

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNo] = useState("");
  const [message, setComment] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhoneNo("");
    setComment("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://hmsmern.onrender.com/user/add-contact-us", {
        name: name,
        phone: phone,
        email: email,
        message: message,
      });
      Swal.fire({
        title: "Success",
        icon: "success",
        confirmButtonText: "Ok",
        text: "Message Sent Successfully! We will get back to you soon!",
      });
      resetForm();
    } catch (err) {
      Swal.fire({
        title: "Error",
        icon: "error",
        confirmButtonText: "Ok",
        text: "Error Sending Message! Please Try Again!",
      });
    }
  };

  return (
    <section className="section">
      <div className="container-contact">
        <div className="contact-info">
          <span>Locate Us</span>
          <span>HMS Trivandrum - India</span>
          <span>
            HMS, RandomAddress, ExampleBlah, Trivandrum - XXXXXX, Kerala, India
          </span>
          <span>Telephone: +91 123 456 7890</span>
          <span>Emergency: +91 123 456 7890</span>
          <span>Corporate Enquiries: +91 123 456 7890</span>
          <span>Email: feedback@hms.org</span>
        </div>
        <div className="form-container">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Phone / Mobile *"
              value={phone}
              onChange={(e) => setPhoneNo(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email Address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              rows="4"
              placeholder="Message *"
              value={message}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
            <button  className=" submit-btn"type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
