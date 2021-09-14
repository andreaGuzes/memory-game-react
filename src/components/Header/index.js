import React from "react";
import "./Header.css";
import BackButton from "../BackButton";
import NextButton from "../NextButton";

const Header = (props) => {
  const { nextLevel, score, decreaseLevel, increaseLevel } = props;

  return (
    <div className="header-container">
      <div className="score-level">
        <p className="level">Score: {score}</p>
        <p className="level">Nivel: {nextLevel}</p>
      </div>
      <div className="back-next-level">
        {nextLevel >= 2 ? <BackButton decreaseLevel={decreaseLevel} /> : null}
        {nextLevel < 21 ? <NextButton increaseLevel={increaseLevel} /> : null}
      </div>
    </div>
  );
};

export default Header;
