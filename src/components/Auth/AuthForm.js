import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { authActions } from '../../store/auth-slice'

import { signupEmailPassword, loginEmailPassword } from '../../api/api'

import Card from '../UI/Card'
import Input from '../UI/Input'
import useInput from '../../hooks/use-input'

import classes from './AuthForm.module.css'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const validateEmail = value => value.trim() !== '' && value.includes('@')
  const validatePassword = value => value.trim() !== '' && value.length >= 6

  const {
    value: enteredEmail,
    isValid: enterdEmailIsValid,
    hasError: emailInputHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    resetInput: resetEmailInput,
  } = useInput(validateEmail)

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    resetInput: resetPasswordInput,
  } = useInput(validatePassword)

  // Form validity
  let formIsValid = false

  if (enterdEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true
  }

  const formSubmitHandler = async event => {
    event.preventDefault()

    if (!formIsValid) {
      return
    }

    const authService = isLogin ? loginEmailPassword : signupEmailPassword

    const { idToken, expiresIn } = await authService(enteredEmail, enteredPassword)

    const expirationTime = Date.now() + expiresIn * 1000

    dispatch(authActions.login({ idToken, expirationTime }))

    resetEmailInput()
    resetPasswordInput()

    navigate('/products', { replace: true })
  }

  const switchAuthModeHandler = () => {
    setIsLogin(prevState => !prevState)
  }

  return (
    <div className={classes.flex}>
      <Card className={classes.card}>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={formSubmitHandler}>
          <Input
            id="email"
            type="email"
            label="Your Email"
            onChangeHandler={emailChangeHandler}
            onBlurHandler={emailBlurHandler}
            InputHasError={emailInputHasError}
            value={enteredEmail}
            errorMessage="Please enter a valid email."
          />

          {/* <Input validate={value=>fsdfsdf}></Input> */}

          <Input
            id="password"
            type="password"
            label="Your Password"
            onChangeHandler={passwordChangeHandler}
            onBlurHandler={passwordBlurHandler}
            InputHasError={passwordInputHasError}
            value={enteredPassword}
            errorMessage="Please enter password more than 6 characters."
          />

          <div className={classes.actions}>
            {<button>{isLogin ? 'Login' : 'Create Account'}</button>}

            <button type="button" className={classes.toggle} onClick={switchAuthModeHandler}>
              {isLogin ? 'Create new account' : 'Login with existing account'}
            </button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default AuthForm

// return (
//   <div className={classes.container}>
//     <Card>
//       <form onSubmit={formSubmitHandler} className={classes.form}>
//         <div className={usernameInputClasses}>
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             onChange={usernameChangeHandler}
//             onBlur={usernameBlurHandler}
//             value={enteredUsername}
//           />
//           {usernameInputHasError && <p>Please enter a valid username.</p>}
//         </div>

//         <div className={passwordInputClasses}>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             onChange={passwordChangeHandler}
//             onBlur={passwordBlurHandler}
//             value={enteredPassword}
//           />
//           {passwordInputHasError && (
//             <p>Please enter password more than 6 characters.</p>
//           )}
//         </div>

//         <button>Login</button>
//       </form>
//     </Card>
//   </div>
// );
