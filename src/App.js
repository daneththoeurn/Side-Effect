import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/Context/auth-context";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // //since we don't have dependencies, the function in useEffect will only run one. Therefore it didn't change compare to the first execution cycle
  // useEffect(() => {
  //   const userLoggedInInfo = localStorage.getItem('isLoggedIn');

  //   if(userLoggedInInfo === '1'){
  //     setIsLoggedIn(true);
  //   }

  // }, [])

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem('isLoggedIn', '1');
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   setIsLoggedIn(false);
  // };

  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
