import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";

import classes from "./AuthForm.module.scss";

const initialState = {
   email: "",
   password: "",
};

const SignInForm = (props) => {
   const validate = Yup.object({
      email: Yup.string().email("Email is Invalid").required("Email is Required"),
      password: Yup.string().min(6, "Password must be 6 characters").required("Password is Required"),
   });

   return (
      <Formik initialValues={initialState} validationSchema={validate} onSubmit={props.submitForm}>
         {(formik) => {
            return (
               <div className={classes["form__container"]} style={{ width: "450px" }}>
                  <div className={classes["modal__form"]}>
                     <h1 className={classes["modal__form--heading"]}>Sign In</h1>
                     <Form className={classes["form__control"]}>
                        <TextField label="Email" name="email" type="email" />
                        <TextField label="Password" name="password" type="text" />
                        <div className={classes["btn__fields"]}>
                           <button type="submit" className={classes.btn}>
                              Sign In
                           </button>
                        </div>
                     </Form>
                  </div>
               </div>
            );
         }}
      </Formik>
   );
};

export default SignInForm;
