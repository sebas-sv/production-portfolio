import React, { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ModalDinoGame from "./portfolio/modal/DinoGame";
import ModalIACelsius from "./portfolio/modal/IACelsius";
import ModalExpenseIncomeControl from "./portfolio/modal/ExpenseIncomeControl";
import ModalCatMemo from "./portfolio/modal/CatMemo";
import ModalGifFinder from "./portfolio/modal/GifFinder";

// Contexts
import LangContext from "../contexts/LangContext";
import LiTemplate from "./portfolio/modal/template/liTemplate";
import Title from "./Title";

const Portfolio = () => {
  const { text } = useContext(LangContext);

  return (
    <div className="portfolio">
      <div
        className="container grid-gallery main-content"
        data-aos="fade-right"
        data-aos-duration="1200"
        data-aos-delay="100"
      >
        <Title mainTitle={text.my} secondTitle={text.portfolio} bgTitle={text.works} />
        <Tabs>
          <TabList className="portfolio-tab-list">
            <Tab>{text.all}</Tab>
            <Tab>{text.apps}</Tab>
            <Tab>{text.games}</Tab>
            <Tab>{text.neuronalNetworks}</Tab>
          </TabList>

          <div className="portfolio-tab-content">
            <TabPanel>
              <ul className="row grid justify-content-center">
                <LiTemplate
                  image="/img/projects/dinosaur-game.png"
                  title={text.dinosaurGame}
                  modalComponent={<ModalDinoGame />}
                />
                <LiTemplate
                  image="/img/projects/ia-celsius.png"
                  title={text.IACelsius}
                  modalComponent={<ModalIACelsius />}
                />
                <LiTemplate
                  image="/img/projects/incomes-expenses-control.png"
                  title={text.expenseIncomeControl}
                  modalComponent={<ModalExpenseIncomeControl />}
                />
                <LiTemplate
                  image="/img/projects/cat-memo.png"
                  title={text.catMemo}
                  modalComponent={<ModalCatMemo />}
                />
                <LiTemplate
                  image="/img/projects/gif-finder.png"
                  title={text.gifFinder}
                  modalComponent={<ModalGifFinder />}
                />
              </ul>
            </TabPanel>

            <TabPanel>
              <ul className="row grid justify-content-center">
                <LiTemplate
                  image="/img/projects/incomes-expenses-control.png"
                  title={text.expenseIncomeControl}
                  modalComponent={<ModalExpenseIncomeControl />}
                />
                <LiTemplate
                  image="/img/projects/gif-finder.png"
                  title={text.gifFinder}
                  modalComponent={<ModalGifFinder />}
                />
              </ul>
            </TabPanel>

            <TabPanel>
              <ul className="row grid justify-content-center">
                <LiTemplate
                  image="/img/projects/dinosaur-game.png"
                  title={text.dinosaurGame}
                  modalComponent={<ModalDinoGame />}
                />
                <LiTemplate
                  image="/img/projects/cat-memo.png"
                  title={text.catMemo}
                  modalComponent={<ModalCatMemo />}
                />
              </ul>
            </TabPanel>

            <TabPanel>
              <ul className="row grid justify-content-center">
                <LiTemplate
                  image="/img/projects/ia-celsius.png"
                  title={text.IACelsius}
                  modalComponent={<ModalIACelsius />}
                />
              </ul>
            </TabPanel>
          </div>
        </Tabs>

      </div>
    </div>
  );
};

export default Portfolio;
