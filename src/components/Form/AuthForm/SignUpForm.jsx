import { Formik, Form } from "formik";

import * as Yup from "yup";

import TextField from "./TextField";
import classes from "./AuthForm.module.scss";

const initialState = {
   firstName: "",
   lastName: "",
   email: "",
   password: "",
   confirmPassword: "",
};

const SignUpForm = (props) => {
   const validate = Yup.object({
      firstName: Yup.string().max(15, " Must be 15 characters or less").required("Required"),
      lastName: Yup.string().max(20, " Must be 20 characters or less").required("Required"),
      email: Yup.string().email("Email is Invalid").required("Email is Required"),
      password: Yup.string()
         .min(6, "Password must be 6 characters")
         .required("Password is Required"),
      confirmPassword: Yup.string()
         .oneOf([Yup.ref("password"), null], "Password must match")
         .required("Confirm Password is Required"),
   });

   return (
      <Formik initialValues={initialState} validationSchema={validate} onSubmit={props.submitForm}>
         {(formik) => (
            <div className={classes["form__container"]}>
               <div className={classes["modal__form"]}>
                  <h1 className={classes["modal__form--heading"]}>Sign Up</h1>
                  <Form className={classes["form__control"]}>
                     <div className={classes["form__row"]}>
                        <TextField
                           label="First Name"
                           name="firstName"
                           type="text"
                           className={classes.col}
                        />
                        <TextField
                           label="Last Name"
                           name="lastName"
                           type="text"
                           className={classes.col}
                        />
                     </div>
                     <TextField label="Email" name="email" type="email" />
                     <TextField label="Password" name="password" type="text" />
                     <TextField label="Confirm Password" name="confirmPassword" type="text" />
                     <div className={classes["btn__fields"]}>
                        <button type="submit" className={classes.btn}>
                           Sign Up
                        </button>
                     </div>
                  </Form>
               </div>
            </div>
         )}
      </Formik>
   );
};

export default SignUpForm;
