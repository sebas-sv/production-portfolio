import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-linkedin",
    link: "https://www.linkedin.com/in/sebastian-solis-vilches/",
    name: "LinkedIn"
  },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((item, i) => (
        <li key={i}>
          <a href={item.link} target="_blank" rel="noreferrer">
            <i className={item.iconName}></i>
          </a>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default Social;
