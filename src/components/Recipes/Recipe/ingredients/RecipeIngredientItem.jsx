import classes from "../Recipe.module.scss";
import icons from "../../../../assets/icons.svg";
import fracty from "fracty";

const checkIcon = `${icons}#icon-check`;

const RecipeIngredientItem = ({ quantity, unit, description }) => {
   return (
      <li className={classes["recipe__ingredient"]}>
         <svg className={classes["recipe__icon"]}>
            <use href={checkIcon}></use>
         </svg>
         <div className={classes["recipe__quantity"]}>{quantity ? fracty(quantity).toString() : ""}</div>
         <div className={classes["recipe__description"]}>
            <span className={classes["recipe__unit"]}>{unit}</span> {description}
         </div>
      </li>
   );
};

export default RecipeIngredientItem;
