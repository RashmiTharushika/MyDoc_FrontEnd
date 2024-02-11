import React, { useState } from 'react';

import './doctorRegCard.css';
import DoctorImg from './../../../assest/data/images/doctor-reg.jpg';

const DoctorRegCard = ({ title, onClick, path }) => {
  const [hovered, setHovered] = useState(false);

  const handleButtonClick = () => {
    // Update the URL when the button is clicked
    window.location.href = path;
  };

  return (
    <div
      className={`image-card-button ${hovered ? 'hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleButtonClick}
    >
      <img src={DoctorImg} alt={title} />
      <div className="button-content">
        <h3>{title}</h3>
        <p className="button-text">DOCTOR</p>
      </div>
    </div>
  );
};

export default DoctorRegCard;
