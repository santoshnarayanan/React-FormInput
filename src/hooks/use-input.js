import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  //const valueIsValid = enteredValue.trim() !== ""; // this code should be fetched from outside
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  //The below handler to be called in SimpleInput.js
  //#region Handler
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };
  //#endregion

  const reset= () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid:valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
