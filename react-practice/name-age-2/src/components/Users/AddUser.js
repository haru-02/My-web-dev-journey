import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "Please enter a valid username and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "invalid age",
        message: "Please enter a valid age (non-negative values).",
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onDismiss={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />

          <label htmlFor="age">Age (years)</label>
          <input id="age" type="number" ref={ageInputRef} />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
