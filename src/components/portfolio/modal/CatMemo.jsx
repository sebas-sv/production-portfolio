import React, { useContext } from "react";
import ModalTemplate from "./template/ModalTemplate";
// Contexts
import LangContext from "../../../contexts/LangContext";

const ModalContent = () => {
  const { text } = useContext(LangContext);

  return (
    <ModalTemplate
      title={text.catMemo}
      projectName={text.webGame}
      urlRepo="https://github.com/sebas-sv/cat-memo"
      languages="React"
      urlWeb="https://sebas-sv.github.io/cat-memo/"
      image="img/projects/cat-memo.png"
    />
  );
};

export default ModalContent;
