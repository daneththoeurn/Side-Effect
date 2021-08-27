import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './Context/auth-context';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //since we don't have dependencies, the function in useEffect will only run one. Therefore it didn't change compare to the first execution cycle
  useEffect(() => {
    const userLoggedInInfo = localStorage.getItem('isLoggedIn');

    if(userLoggedInInfo === '1'){
      setIsLoggedIn(true);
    }
  
  }, [])
  
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler}}>
      <MainHeader/>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
