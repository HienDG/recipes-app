import { createContext, useState } from "react";

const store = createContext({
   token: "",
   signIn: (token) => {},
   logout: () => {},
});

const retrieveStoredToken = () => {
   const storedToken = localStorage.getItem("token");

   return { token: storedToken };
};

export const Provider = (props) => {
   const tokenData = retrieveStoredToken();
   let initialToken;

   if (tokenData) initialToken = tokenData.token;

   const [token, setToken] = useState(initialToken);
   const isLoggedIn = !!token;
   const signInHandler = (token) => {
      localStorage.setItem("token", token);
      setToken(token);
   };

   const logoutHandler = () => {
      localStorage.removeItem("token");
      setToken(null);
   };

   const initialStore = {
      token: token,
      signIn: signInHandler,
      isLoggedIn,
      logout: logoutHandler,
   };

   return <store.Provider value={initialStore}>{props.children}</store.Provider>;
};

export default store;
