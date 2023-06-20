import React, { useContext } from "react";
// Contexts
import LangContext from "../../../../contexts/LangContext";

const ModalTemplate = ({ title, projectName, urlRepo, languages, urlWeb, image }) => {
  const { text } = useContext(LangContext);

  return (
    <div className="slideshow">
      <figure>
        <figcaption>
          <h3>{title}</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">{text.project}</span>:{" "}
              <span className="ft-wt-600 uppercase">{projectName}</span>
            </div>

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-brands fa-github pr-2"></i>
              <span className="project-label">{text.repository}</span>:{" "}
              <span className="ft-wt-600 uppercase"><a
                href={urlRepo}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a></span>
            </div>

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">{text.languages}</span>:{" "}
              <span className="ft-wt-600 uppercase">{languages}</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">{text.open}</span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href={urlWeb}
                  target="_blank"
                  rel="noreferrer"
                >
                  {title}
                </a>
              </span>
            </div>
          </div>
        </figcaption>

        <a href={urlWeb} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} />
        </a>
      </figure>
    </div>
  );
};

export default ModalTemplate;
