import React from "react";
import "./DoctorCard.css";

const DoctorCard = ({ name, specialty, availability, image }) => {
  return (
    <div className="doctor-card">
      <img src={image} alt={name} className="doctor-image" />
      <div className="doctor-info">
        <p className="availability">
          <span className="status-dot"></span> {availability}
        </p>
        <h3>{name}</h3>
        <p>{specialty}</p>
      </div>
    </div>
  );
};

export default DoctorCard;