import React from "react";
import Card from "../Card";
import "./Board.css";

const Board = (props) => {
  const { cards, flipCard, onGameMove } = props;

  return (
    <div className="cards-container">
      {cards.map((card, i) => {
        return (
          <Card
            key={i}
            card={card}
            flipCard={flipCard}
            onClick={() => onGameMove(card, i)}
          />
        );
      })}
    </div>
  );
};

export default Board;
