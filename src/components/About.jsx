import React, { useContext } from "react";
import Education from "./about/Education";
import Experience from "./about/Experience";
import LangContext from "../contexts/LangContext";
import Title from "./Title";

const About = () => {
  const { text } = useContext(LangContext);

  return (
    <div className="about">
      <div
        className="container grid-gallery main-content"
        data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <Title mainTitle={text.about} secondTitle={text.me} bgTitle={text.resume} />
        <section className="main-content ">
          <div className="container">

            <div className="row">
              <div className="col-12">
                <div className="text-sm-center">
                  <a className="button" href={text.cv} download>
                    <span className="button-text">{text.downloadCv}</span>
                    <span className="button-icon fa fa-download"></span>
                  </a>
                </div>
              </div>
            </div>

            <hr className="separator mt-1" />

            <div className="row">
              <div className="col-lg-6 m-15px-tb">
                <div className="resume-box">
                  <Experience />
                </div>
              </div>
              <div className="col-lg-6 m-15px-tb">
                <div className="resume-box">
                  <Education />
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
