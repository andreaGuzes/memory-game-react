import React from "react";
import ReactCardFlip from "react-card-flip";
import "./Card.css";
import backFace from "./backFace.png";

const Card = (props) => {
  const { card, onClick } = props;

  const onCardClick = () => {
    if (!card.isFlipped) onClick();
  };

  return (
    <>
      <ReactCardFlip isFlipped={card.isFlipped}>
        <img
          className="back-face"
          src={backFace}
          alt="backFace"
          onClick={onCardClick}
        />
        <div className={`game-card-${card.index + 1}`} onClick={onCardClick} />
      </ReactCardFlip>
    </>
  );
};

export default Card;
