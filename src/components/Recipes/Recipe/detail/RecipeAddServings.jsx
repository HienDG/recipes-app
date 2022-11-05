import classes from "./../Recipe.module.scss";
import icons from "../../../../assets/icons.svg";

const [minusIcon, plusIcon] = [`${icons}#icon-minus-circle`, `${icons}#icon-plus-circle`];
const RecipeAddServings = ({ onIncrease, onDecrease, isDisable }) => {
   const { minus, plus } = isDisable;
   return (
      <div className={classes["recipe__info-buttons"]}>
         <button className={`${classes["btn--tiny"]} ${classes["btn--servings"]}`} onClick={onDecrease} disabled={minus}>
            <svg>
               <use href={minusIcon}></use>
            </svg>
         </button>
         <button className={`${classes["btn--tiny"]} ${classes["btn--servings"]}`} onClick={onIncrease} disabled={plus}>
            <svg>
               <use href={plusIcon}></use>
            </svg>
         </button>
      </div>
   );
};

export default RecipeAddServings;
