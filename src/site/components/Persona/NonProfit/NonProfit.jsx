import React from "react";
import "./NonProfit.scss";
import image from "../../../assets/images/student-persona.png";
import studentData from "../../../data/personas/non-profit.json";

const Student = () => {
  const {
    Persona: { Age, Education, Hometown, Family, Occupation },
    Goals,
    Frustrations,
    Biography: { Text: Bio },
  } = studentData;

  return (
    <section className="student">
      <div className="student__header">
        <img className="student__header-img" src={image} alt="tech students" />
        <div className="student__card">
          <h2 className="student__title">Persona</h2>
          <ul className="student__list-items">
            <li className="student__list-item">Age: {Age}</li>
            <li className="student__list-item">Education: {Education}</li>
            <li className="student__list-item">Hometown: {Hometown}</li>
            <li className="student__list-item">Family: {Family}</li>
            <li className="student__list-item">Occupation: {Occupation}</li>
          </ul>
        </div>
      </div>
      <div className="student__body-container">
        <div className="student__card">
          <h2 className="student__title">Goals</h2>
          <ul className="student__list-items">
            {Goals.map((goal, index) => (
              <li key={index} className="student__list-item">
                {goal}
              </li>
            ))}
          </ul>
        </div>
        <div className="student__card">
          <h2 className="student__title">Frustrations</h2>
          <ul className="student__list-items">
            {Frustrations.map((frustration, index) => (
              <li key={index} className="student__list-item">
                {frustration}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <section className="student__bio">
        <h2 className="student__bio-title">Biography</h2>
        <p className="student__bio-text">{Bio}</p>
      </section>
    </section>
  );
};

export default Student;
