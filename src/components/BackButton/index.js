import React from "react";
import "./BackButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BackButton = (props) => {
  const { decreaseLevel } = props;
  return (
    <div>
      <button className="update-level" onClick={decreaseLevel}>
        <FontAwesomeIcon icon={faArrowLeft} /> Regresar
      </button>
    </div>
  );
};

export default BackButton;
