import React, { useContext } from "react";
import LangContext from "../../contexts/LangContext";

const Experience = () => {
  const { text } = useContext(LangContext);

  const experienceContent = [
    {
      year: "2024 - " + text.present,
      position: text.vassPosition,
      compnayName: "VASS",
      details: text.vassDetails,
    },
    {
      year: "2022 - 2024",
      position: text.accenturePosition,
      compnayName: "ACCENTURE",
      details: text.accentureDetails,
    },
    {
      year: "2020 - " + "2022",
      position: text.nttDataPosition,
      compnayName: "NTT DATA",
      details: text.nttDataDetails,
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
