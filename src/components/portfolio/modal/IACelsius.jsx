import React, { useContext } from "react";
import ModalTemplate from "./template/ModalTemplate";
// Contexts
import LangContext from "../../../contexts/LangContext";

const ModalContent = () => {
  const { text } = useContext(LangContext);

  return (
    <ModalTemplate
      title={text.IACelsius}
      projectName={text.neuronalNetwork}
      urlRepo="https://github.com/sebas-sv/temperature-neural-network"
      languages="Python (TensorFlow)"
      urlWeb="https://sebas-sv.github.io/temperature-neural-network/"
      image="img/projects/ia-celsius.png"
    />
  );
};

export default ModalContent;
