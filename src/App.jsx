import React, { useCallback, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Header from "./Components/modules/Header/Header";
import Footer from "./Components/modules/Footer/Footer";
import AuthContext from "./context/AuthContext";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [userInfos, setUserInfos] = useState(null);

  const login = useCallback((token, userInfos) => {
    setIsLoggedIn(true);
    setUserInfos(userInfos);
    setToken(token);
    localStorage.setItem("user", JSON.stringify({ token }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserInfos({});
    localStorage.removeItem("user");
  }, []);

  useEffect(() => {
    const localStorageData = localStorage.getItem("user");
    if (localStorageData) {
      fetch("http://localhost:4000/v1/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorageData).token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setIsLoggedIn(true);
          setUserInfos(data);
        });
    } else {
      setIsLoggedIn(false);
      setUserInfos({});
      setToken(null);
    }
  }, [login]);
  const router = useRoutes(routes);
  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn,
          token,
          userInfos,
          login,
          logout,
        }}
      >
        <Header />
        {router}
        <Footer />
      </AuthContext.Provider>
    </>
  );
}

export default App;
