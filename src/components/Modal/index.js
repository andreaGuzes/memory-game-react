import React from "react";
import { Modal, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSync,
  faStar,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    width: 400,
    backgroundColor: "white",
    border: "2px solid #000",
    borderRadius: "5px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
}));

const PopUp = (props) => {
  const styles = useStyles();
  const { isOpen, closeModal, increaseLevel, nextLevel } = props;

  const refresh = (e) => {
    window.location.reload();
  };

  const body = (
    <div className={styles.modal}>
      <FontAwesomeIcon className="icon-star" icon={faStar} />
      <p className="winner"> ¡Ganaste! </p>
      <div className="btn">
        <Button onClick={refresh}>
          <FontAwesomeIcon className="icon" icon={faSync} />
        </Button>
        {nextLevel < 21 ? (
          <Button onClick={increaseLevel}>
            <FontAwesomeIcon className="icon-up" icon={faArrowRight} />
          </Button>
        ) : null}
      </div>
    </div>
  );

  return (
    <div className="container-modal">
      <Modal
        className="modal"
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default PopUp;
