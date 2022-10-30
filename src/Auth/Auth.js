import store from "../store";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_KEY = "AIzaSyDn8o8xr1gIJram0apQarvi6VYa0nN65Lo";

const Auth = ({ enteredEmail, enteredPassword }, isRegister = true) => {
   const authContext = useContext(store);
   const [isLoading, setIsLoading] = useState(false);
   const navigate = useNavigate();
   const url = isRegister
      ? `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
      : `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

   fetch(url, {
      method: "POST",
      body: JSON.stringify({
         email: enteredEmail,
         password: enteredPassword,
         returnSecureToken: true,
      }),
      headers: {
         "Content-Type": "application/json",
      },
   })
      .then((res) => {
         setIsLoading(false);
         if (res.ok) {
            return res.json();
         } else {
            return res.json().then((data) => {
               let errMessage = "Authentication failed!";
               if (data && data.error && data.error.message) errMessage = data.error.message;
               throw new Error(errMessage);
            });
         }
      })
      .then((data) => {
         console.log(data);
         authContext.signUp(data.idToken);
         navigate("/");
      });

   return { isLoading };
};

export default Auth;
