import React, { useContext } from "react";
import ModalTemplate from "./template/ModalTemplate";
// Contexts
import LangContext from "../../../contexts/LangContext";

const ModalContent = () => {
  const { text } = useContext(LangContext);

  return (
    <ModalTemplate
      title={text.expenseIncomeControl}
      projectName={text.webApp}
      urlRepo="https://github.com/sebas-sv/incomes-expenses-control"
      languages="React"
      urlWeb="https://sebas-sv.github.io/incomes-expenses-control"
      image="img/projects/incomes-expenses-control.png"
    />
  );
};

export default ModalContent;
