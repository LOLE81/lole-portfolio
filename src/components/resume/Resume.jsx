import React from "react";
import './resume.css'
import CV from '../../images/cv.png'

function Resume() {

  return (
  <div className="resume">
      <a href="https://drive.google.com/uc?export=download&id=1tcLwz7rPA8iyp2e-yQvu7tJUiB0s52IR">
        <img src={CV} alt="resume icon" className="resume-icon"/>
      </a>
  </div>
  );
};

export default Resume;