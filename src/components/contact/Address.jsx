import React, { useContext } from "react";
import LangContext from "../../contexts/LangContext";

const Address = () => {
  const { text } = useContext(LangContext);

  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">{text.mailMe}</span>{" "}
        <a href={`mailto:${text.constants.email}`}>{text.constants.email}</a>
      </p>
    </>
  );
};

export default Address;
