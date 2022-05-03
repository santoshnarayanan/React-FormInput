import {useState, useRef, useEffect} from "react";
const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] =  useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    useEffect(()=>{
       if(enteredNameIsValid){
           console.log("Name input is invalid!");
       }
    },[enteredNameIsValid]);

    const nameInputChangeHandler = event =>{
        setEnteredName(event.target.value);
    };

    const formSubmissionHandler= event => {
        event.preventDefault();

        setEnteredNameTouched(true);

        if(enteredName.trim() ===''){
            setEnteredNameIsValid(false);
            return;
        }

        setEnteredNameIsValid(true);
        console.log(enteredName);
        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);

        //nameInputRef.current.value ='' // This is not correct as this manipulates DOM
        setEnteredName('');
    };

    const nameInputIsInValid = !enteredNameIsValid && enteredNameTouched;

    const nameInputClasses = enteredNameIsValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} />
      </div>
        {enteredNameIsValid && <p className="error-text"> Name must not be empty</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
