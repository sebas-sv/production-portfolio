import React, { useContext } from "react";
import LangContext from "../../contexts/LangContext";

const Education = () => {
  const { text } = useContext(LangContext);

  const educationContent = [
    {
      year: "2022 - 2024",
      degree: text.fpMasterTitle,
      institute: "CIDEAD (Online)",
      details: text.iabd,
    },
    {
      year: "2018 - 2020",
      degree: text.fpTitle,
      institute: "I.E.S. JULIO VERNE",
      details: text.daw,
    },
    {
      year: "2015 - 2019",
      degree: text.degreeTitle,
      institute: text.ugr,
      details: text.musicology,
    },
    {
      year: "2010 - 2012",
      degree: text.bachelorTitle,
      institute: "I.E.S. PEPE RUIZ VELA",
      details: text.technologicalSciences,
    },
  ];

  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-graduation-cap"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
