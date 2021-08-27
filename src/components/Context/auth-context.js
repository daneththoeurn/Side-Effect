import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});
export function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  useEffect(() => {
  const userLoggedInInfo = localStorage.getItem('isLoggedIn');

    if(userLoggedInInfo === '1'){
      setIsLoggedIn(true);
    }

  }, [])

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContextProvider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContextProvider>
  );
}

export default AuthContext;
