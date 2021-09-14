import React from "react";
import "./NextButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const NextButton = (props) => {
  const { increaseLevel } = props;

  return (
    <div>
      <button className="update-level" onClick={increaseLevel}>
        Siguiente <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default NextButton;
