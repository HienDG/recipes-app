import SignUpForm from "../components/Form/AuthForm/SignUpForm";
import Spinner from "../components/UI/Spinner";
import Backdrop from "../components/UI/Backdrop";
import Overlay from "../components/UI/Overlay";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";

const url =
  "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDn8o8xr1gIJram0apQarvi6VYa0nN65Lo";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const submitAuthenticator = (data, { resetForm }) => {
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
        navigate("/");
      });

    resetForm();
  };

  const closeModal = () => {
    navigate("/");
  };

  return (
    <>
      {createPortal(<Backdrop onClick={closeModal} />, document.getElementById("backdrop-root"))}
      {createPortal(
        <Overlay>
          {isLoading ? <Spinner /> : <SignUpForm submitForm={submitAuthenticator} />}
        </Overlay>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default React.memo(SignUp);
