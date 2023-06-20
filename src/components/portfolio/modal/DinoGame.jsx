import React, { useContext } from "react";
import ModalTemplate from "./template/ModalTemplate";
// Contexts
import LangContext from "../../../contexts/LangContext";

const ModalContent = () => {
  const { text } = useContext(LangContext);

  return (
    <ModalTemplate
      title={text.dinosaurGame}
      projectName={text.webGame}
      urlRepo="https://github.com/sebas-sv/dinosaur-game"
      languages="HTML, CSS, JavaScript"
      urlWeb="https://sebas-sv.github.io/dinosaur-game"
      image="img/projects/dinosaur-game.png"
    />
  );
};

export default ModalContent;
