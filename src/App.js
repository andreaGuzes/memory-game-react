import "./styles.css";
import { useEffect, useState } from "react";
import Board from "./components/Board";
import Header from "./components/Header";
import PopUp from "./components/Modal";

const generateLevel = (level) => {
  return Array.from(Array(level + 3).keys()).map((n) => {
    return {
      index: n,
      numberCard: `game-card-${n + 1}`,
      isFlipped: false,
      pairFound: false
    };
  });
};

const shuffleArray = (arrayToOrder) => {
  const array = [...arrayToOrder];
  for (let i = array.length - 1; i > 0; i--) {
    const mix = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[mix];
    array[mix] = temp;
  }
  return array;
};

export default function App() {
  const [nextLevel, setNextLevel] = useState(1);
  const level = parseInt(`${nextLevel}`, 10);
  const initLevel1 = generateLevel(level);
  const initLevel2 = generateLevel(level);

  const [cards, setCards] = useState([
    ...shuffleArray(initLevel1),
    ...shuffleArray(initLevel2)
  ]);

  const [firstCard, setFirstCard] = useState(-1);
  const [secondCard, setSecondCard] = useState(-1);
  const [flipCard, setFlipCard] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const levelN = shuffleArray(generateLevel(parseInt(nextLevel, 10)));
    const levelN1 = shuffleArray(generateLevel(parseInt(nextLevel, 10)));
    setCards([...levelN1, ...levelN]);
  }, [nextLevel]);

  useEffect(() => {
    if (flipCard) {
      const newCards = [...cards];
      newCards[firstCard].isFlipped = false;
      newCards[secondCard].isFlipped = false;
      setFirstCard(-1);
      setSecondCard(-1);
      setCards(newCards);
      setFlipCard(false);
    }
  }, [flipCard]);

  useEffect(() => {
    const guessedCard = cards.filter((card) => card.pairFound === true);
    if (guessedCard.length) {
      setScore(guessedCard.length * 10);
    }
  }, [cards]);

  useEffect(() => {
    const flippedCard = cards.filter((card) => card.isFlipped === true);
    if (flippedCard.length === cards.length) {
      setIsOpen(true);
    }
  }, [cards]);

  const onGameMove = (card, index) => {
    const newCards = [...cards];
    if (firstCard === -1) {
      newCards[index].isFlipped = true;
      setCards(newCards);
      return setFirstCard(index);
    }
    if (newCards[firstCard].index === newCards[index].index) {
      newCards[firstCard].pairFound = true;
      newCards[index].isFlipped = true;
      newCards[index].pairFound = true;
      setFirstCard(-1);
      return setCards(newCards);
    }

    setSecondCard(index);
    newCards[index].isFlipped = true;
    setCards(newCards);
    setTimeout(() => {
      setFlipCard(true);
    }, 1000);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const increaseLevel = () => {
    setNextLevel(nextLevel + 1);
    setIsOpen(false);
  };

  const decreaseLevel = () => {
    setNextLevel(nextLevel - 1);
  };

  return (
    <div className="App">
      <Header
        nextLevel={nextLevel}
        score={score}
        increaseLevel={increaseLevel}
        decreaseLevel={decreaseLevel}
      />
      <Board cards={cards} onGameMove={onGameMove} />
      <PopUp
        closeModal={closeModal}
        isOpen={isOpen}
        increaseLevel={increaseLevel}
        nextLevel={nextLevel}
      />
    </div>
  );
}
