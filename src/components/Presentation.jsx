import React, { useContext } from "react";
// Contexts
import LangContext from "../contexts/LangContext";

const Presentation = () => {
  const { text } = useContext(LangContext);

  return (
    <div className="home">
      <div
        className="container grid-gallery main-content"
        data-aos="fade-down-right"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <div class="color-block d-none d-lg-block"></div>
        <div className="row home-details-container align-items-center">
          <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
            <div>
              <h1 className="text-uppercase poppins-font">
                {text.im}
                <span>{text.designation}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
