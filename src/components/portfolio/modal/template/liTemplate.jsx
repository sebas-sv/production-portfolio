import React, { useState, useContext } from "react";
import Modal from "react-modal";

// Contexts
import ThemeContext from "../../../../contexts/ThemeContext";

const LiTemplate = ({ image, title, modalComponent }) => {
  const { theme } = useContext(ThemeContext);

  const [isOpen, setIsOpen] = useState(false);

  function toggleItem() {
    setIsOpen(!isOpen);
  }

  return (
    <li
      data-aos="fade-right"
      data-aos-duration="1200"
      data-aos-delay="0"
    >
      <figure onClick={toggleItem}>
        <img src={image} alt={title} />
        <div className=" hover-content-wrapper">
          <span className="content-title" style={{ padding: '10px 40px' }}>
            <div style={{ background: 'rgba(45, 50, 60, .85)', borderRadius: '12px', padding: '10px' }}>
              {title}
            </div>
          </span>
        </div>
      </figure>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleItem}
        contentLabel={title}
        className={theme.modalClassNamePortfolio}
        overlayClassName={theme.modalOverlayClassName}
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleItem}>
            <img src="/img/cancel.svg" alt="close icon" />
          </button>

          <div className="box_inner portfolio">
            {modalComponent}
          </div>
        </div>
      </Modal>
    </li >
  )
};

export default LiTemplate;
