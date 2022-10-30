import SignInForm from "../components/Form/AuthForm/SignInForm";
import Spinner from "../components/UI/Spinner";
import Backdrop from "../components/UI/Backdrop";
import Overlay from "../components/UI/Overlay";
import { createPortal } from "react-dom";

import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import store from "../store";

const url =
   "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDn8o8xr1gIJram0apQarvi6VYa0nN65Lo";

const SignIn = () => {
   const authContext = useContext(store);
   const [isLoading, setIsLoading] = useState(false);
   const navigate = useNavigate();
   const closeModal = () => {
      navigate("/");
   };

   const submitHandler = (data, { resetForm }) => {
      setIsLoading(true);
      const { email: enteredEmail, password: enteredPassword } = data;

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
                  alert(errMessage);
                  throw new Error(errMessage);
               });
            }
         })
         .then((data) => {
            // idToken
            authContext.signIn(data.idToken);
            navigate("/");
         });

      resetForm();
   };

   return (
      <>
         {createPortal(<Backdrop onClick={closeModal} />, document.getElementById("backdrop-root"))}
         {createPortal(
            <Overlay>
               {isLoading ? <Spinner /> : <SignInForm submitForm={submitHandler} />}
            </Overlay>,
            document.getElementById("overlay-root")
         )}
      </>
   );
};

export default SignIn;
