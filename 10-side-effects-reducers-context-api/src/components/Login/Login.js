import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }

  return { value: '', isValid: false }; // default response
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  return { value: '', isValid: false }; // default response
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(
    emailReducer,    // define reducerFunc outside the current component
    {                // init state
      value: '',
      isValid: null,
    },

  );

  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,    // define reducerFunc outside the current component
    {                   // init state
      value: '',
      isValid: null,
    },

  );

  const ctx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  // object destrucring: take one of the properties out from an object
  // emailValid = emailState.isValid
  const { isValid: emailValid } = emailState;
  const { isValid: passwordValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      console.log('CLEANUP');
      console.log('email: ', emailValid);
      console.log('password: ', passwordValid);
      setFormIsValid(emailValid && passwordValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailValid, passwordValid]
  );

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

    // setFormIsValid(
    //   emailValid && passwordValid
    // );

  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });

    // setFormIsValid(
    //   emailValid && passwordValid
    // );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: 'INPUT_BLUR', value: emailValid });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(passwordState.isValid);
    dispatchPassword({ type: 'INPUT_BLUR', value: passwordValid });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      // props.onLogin(emailState.value, passwordState.value);
      ctx.onLogin(emailState.value, passwordState.value);
      console.log('if');
    }
    else if (!emailValid) {
      emailInputRef.current.focus();
      console.log('else if 1');
    }
    else if (!passwordValid) {
      passwordInputRef.current.focus();
      console.log('else if 2');
    }
    else {
      throw Error('unknown form validity');
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        {/* <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div> */}

        <Input
          ref={emailInputRef}
          labelFor='email'
          label='E-mail'
          type='email'
          id='email'
          state={emailState}
          changeHandler={emailChangeHandler}
          validateHandler={validateEmailHandler}
        />
        {/* <div
          className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div> */}
        <Input
          ref={passwordInputRef}
          labelFor='password'
          label='Password'
          type='password'
          id='password'
          state={passwordState}
          changeHandler={passwordChangeHandler}
          validateHandler={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
