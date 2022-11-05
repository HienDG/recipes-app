import icons from "../../assets/icons.svg";
import classes from "./ErrorMessage.module.scss";

const errorIcon = `${icons}#icon-alert-triangle`;
const ErrorMessage = () => {
  return (
    <div className={classes.error}>
      <div>
        <svg>
          <use href={errorIcon}></use>
        </svg>
      </div>
      <p>No recipes found for your query. Please try again!</p>
    </div>
  );
};

export default ErrorMessage;
