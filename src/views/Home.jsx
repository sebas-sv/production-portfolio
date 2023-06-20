import React, { useContext } from "react";
// Components
import Presentation from "../components/Presentation";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
// Contexts
import LangContext from "../contexts/LangContext";
import ThemeContext from "../contexts/ThemeContext";

const Home = () => {
  const { text, handleChangeLang } = useContext(LangContext);
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  theme.addClassLight ? document.body.classList.add('light') : document.body.classList.remove('light');

  return (
    <div className={theme.color}>
      <div className="button-theme">
        <div onClick={handleChangeTheme}>
          <i className={theme.icon}></i>
        </div>
      </div>

      <div className="button-language">
        <div onClick={handleChangeLang}>
          <i className="fa fa-language"></i>
        </div>
      </div>

      <div>
        <Presentation />
        <Portfolio />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
