import { useState } from "react";
import classes from "./UserForm.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const initialUser = {
  id: Math.random().toString(),
  userName: "",
  userAge: "",
};

const UserForm = (props) => {
  const [userInput, setUserInput] = useState(initialUser);
  const [error, setError] = useState();

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return { ...prevInput, id: Math.random().toString(), [input]: value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(userInput);
    if (
      userInput.userName.trim().length === 0 ||
      userInput.userAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+userInput.userAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(userInput);
    setUserInput(initialUser);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            type="text"
            onChange={(event) => {
              inputChangeHandler("userName", event.target.value);
            }}
            value={userInput["userName"]}
          ></input>
          <label htmlFor="userAge">Age(Years)</label>
          <input
            id="userAge"
            type="number"
            onChange={(event) => {
              inputChangeHandler("userAge", event.target.value);
            }}
            value={userInput["userAge"]}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default UserForm;
