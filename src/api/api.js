export const signupEmailPassword = async (enteredEmail, enteredPassword) => {
  const response = await fetch(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBzCLzkij3iJDBGdtz9GaWmnUdYelj0rHM',
    {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await response.json();

  if (response.ok) {
    const idToken = data.idToken;
    const expiresIn = data.expiresIn;

    return { idToken, expiresIn };
  } else {
    let errorMessage = 'Sign up failed';
    if (data && data.error && data.error.message) {
      errorMessage = data.error.message;
    }
    alert(errorMessage);
  }
};

export const loginEmailPassword = async (enteredEmail, enteredPassword) => {
  const response = await fetch(
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBzCLzkij3iJDBGdtz9GaWmnUdYelj0rHM',
    {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await response.json();

  if (response.ok) {
    const idToken = data.idToken;
    const expiresIn = data.expiresIn;

    return { idToken, expiresIn };
  } else {
    let errorMessage = 'Login failed';
    if (data && data.error && data.error.message) {
      errorMessage = data.error.message;
    }
    alert(errorMessage);
  }
};
