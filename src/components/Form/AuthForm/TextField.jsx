import { useField, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import classes from "./AuthForm.module.scss";

const TextField = ({ label, ...props }) => {
   const [field, meta] = useField(props);
   const invalid = meta.error && meta.touched ? classes.invalid : "";
   return (
      <div className={`${classes["form__group"]} ${invalid} ${props.className}`}>
         <label htmlFor={props.name} className={classes["form__label"]}>
            {label}
         </label>
         <input
            autoComplete="off"
            {...field}
            {...props}
            className={classes["form__input"]}
            value={field.value}
            onBlur={field.onBlur}
            onChange={field.onChange}
         />
         <ErrorMessage name={field.name} />
      </div>
   );
};

TextField.propTypes = {
   label: PropTypes.string,
   name: PropTypes.string,
   type: PropTypes.string,
};

export default TextField;
