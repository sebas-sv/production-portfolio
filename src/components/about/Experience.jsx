import React, { useContext } from "react";
import LangContext from "../../contexts/LangContext";

const Experience = () => {
  const { text } = useContext(LangContext);

  const experienceContent = [
    {
      year: "2022 - " + text.present,
      position: text.aemPosition,
      compnayName: "ACCENTURE",
      details: text.aemDetails,
    },
    {
      year: "2020 - " + "2022",
      position: text.aemPosition,
      compnayName: "NTT DATA",
      details: text.aemDetails,
    },
    {
      year: "2013 - 2019",
      position: text.guitarristPosition,
      compnayName: text.guitarristCompany,
      details: text.guitarristDetails,
    },
  ];

  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
