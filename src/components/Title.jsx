import React from "react";

const Title = ({ mainTitle, secondTitle, bgTitle }) => {
    return (
        <div className="title-section text-center text-sm-center">
            <h1>{mainTitle} <span>{secondTitle}</span></h1>
            <span className="title-bg">{bgTitle}</span>
        </div>
    );
};

export default Title;
