import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // // will only be executed once (at first run) as there's no dependency in the array[]. 
  // // useEffect will only be re-executed when something in the dependency array changed
  // // for useState, the whole App() function re-executes whenever the state changes, 
  // // so not using useState here is to avoid the infinite loggedIn/setLoggedIn loop.
  // useEffect(
  //   () => {
  //     console.log('-------------RENDERED-------------');
  //     // remain login when leaved page
  //     const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');

  //     if (storedUserLoggedInInfo === '1') {
  //       setIsLoggedIn(true);
  //     }
  //   },
  //   []
  // );

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways

  //   localStorage.setItem('email', email);
  //   localStorage.setItem('password', password);
  //   localStorage.setItem('isLoggedIn', '1');

  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  //   localStorage.removeItem('email');
  //   localStorage.removeItem('password');
  //   localStorage.removeItem('isLoggedIn');
  // };
  const ctx = useContext(AuthContext);
  return (
    // <AuthContext.Provider
    // value={
    //   {
    //     isLoggedIn: isLoggedIn,
    //     onLogout: logoutHandler,
    //     onLogin: loginHandler,
    //   }
    // }>
    <React.Fragment>

      <MainHeader />

      {/* <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main> */}
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>

    </React.Fragment>
    // </AuthContext.Provider>
  );
}

export default App;
