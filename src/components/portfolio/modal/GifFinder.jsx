import React, { useContext } from "react";
import ModalTemplate from "./template/ModalTemplate";
// Contexts
import LangContext from "../../../contexts/LangContext";

const ModalContent = () => {
  const { text } = useContext(LangContext);

  return (
    <ModalTemplate
      title={text.gifFinder}
      projectName={text.webApp}
      urlRepo="https://github.com/sebas-sv/gif-finder"
      languages="React"
      urlWeb="https://sebas-sv.github.io/gif-finder"
      image="img/projects/gif-finder.png"
    />
  );
};

export default ModalContent;
