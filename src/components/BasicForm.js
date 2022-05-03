import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim !== '';
const isEmail = (value) => value.includes('@');

const BasicForm = (props) => {
  //#region  constants defined for firstName, lastName and Email field
  const {
    value:firstNameValue, 
    isValid:firstNameIsValid, 
    hasError:firstNameHasError,
    valueChangeHandler:firstNameChangeHandler,
    inputBlurHandler:firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value:lastNameValue, 
    isValid:lastNameIsValid, 
    hasError:lastNameHasError,
    valueChangeHandler:lastNameChangeHandler,
    inputBlurHandler:lastNameBlurHandler,
    reset: resetLastName,
  } =useInput(isNotEmpty);

  const {
    value:emailValue, 
    isValid:emailIsValid, 
    hasError:emailHasError,
    valueChangeHandler:emailChangeHandler,
    inputBlurHandler:emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  //#endregion

  let formIsValid = false;
  if(firstNameIsValid && lastNameIsValid && emailIsValid){
    formIsValid = true;
  }

  const submitHandler = event=> {
    event.preventDefault();

    if(!formIsValid){
      return;
    }

    console.log("Submitted form successfuly");
    console.log(firstNameValue, lastNameValue, emailValue);

    //clear values after submitting form
    resetFirstName();
    resetLastName();
    resetEmail();

  };

  //#region classes for html tags
  const firstNameClasses = firstNameHasError ? "form-control invalid" : "form-control";
  const lastNameClasses = lastNameHasError ? "form-control invalid" : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";
  //#endregion

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" value={firstNameValue} onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
        </div>
        {firstNameHasError && <p className='error-text'>Please enter first name</p>}
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" value={lastNameValue} onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler} />
        </div>
        {lastNameHasError && <p className='error-text'>Please enter last name</p>}
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" value={emailValue} onChange={emailChangeHandler}
            onBlur={emailBlurHandler} />
        {emailHasError && <p className='error-text'>Please enter email address</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
