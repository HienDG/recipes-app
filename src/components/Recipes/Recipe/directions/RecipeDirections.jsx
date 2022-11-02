import classes from "../Recipe.module.scss";
import icons from "../../../../assets/icons.svg";

const arrowIcon = `${icons}#icon-arrow-right`;

const RecipeDirections = ({ publisher, source }) => {
   return (
      <div className={classes["recipe__directions"]}>
         <h2 className="heading--2">How to cook it</h2>
         <p className={classes["recipe__directions-text"]}>
            This recipe was carefully designed and tested by
            <span className={classes["recipe__publisher"]}> {publisher}</span>. Please check out directions at their website.
         </p>
         <a className={classes["btn--small"]} href={source} target="_blank" rel="noreferrer">
            <span>Directions</span>
            <svg className={classes["search__icon"]}>
               <use href={arrowIcon}></use>
            </svg>
         </a>
      </div>
   );
};

export default RecipeDirections;
