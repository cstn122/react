import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // will only be executed once (at first run) as there's no dependency in the array[]. 
  // useEffect will only be re-executed when something in the dependency array changed
  // for useState, the whole App() function re-executes whenever the state changes, 
  // so not using useState here is to avoid the infinite loggedIn/setLoggedIn loop.
  useEffect(
    () => {
      console.log('-------------RENDERED-------------');
      const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');

      if (storedUserLoggedInInfo === '1') {
        setIsLoggedIn(true);
      }
    },
    []
  );

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    // localStorage.setItem('isLoggedIn', '1');

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('email');
    localStorage.removeItem('password');

  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
