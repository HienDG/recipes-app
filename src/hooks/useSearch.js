import { useState } from "react";

const validateFunction = (value, regexp) => {
  const isValue = value.match(regexp) ? true : false;
  return isValue;
};

const useSearch = (regexp) => {
  const [enteredValue, setEnteredValue] = useState("");
  const isValidValue = validateFunction(enteredValue, regexp);

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const resetForm = () => {
    setEnteredValue("");
  };

  return {
    value: enteredValue,
    setValue: setEnteredValue,
    isValue: isValidValue,
    change: inputChangeHandler,
    reset: resetForm,
  };
};

export default useSearch;
