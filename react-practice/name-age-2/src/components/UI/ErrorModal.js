import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import ReactDom from "react-dom";
import React from "react";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onDismiss} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onDismiss}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop onDismiss={props.onDismiss} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          onDismiss={props.onDismiss}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
