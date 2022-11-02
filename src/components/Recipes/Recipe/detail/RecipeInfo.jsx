import classes from "./../Recipe.module.scss";

const RecipeInfo = ({ children, title, value, icon }) => {
   return (
      <div className={classes["recipe__info"]}>
         <svg className={classes["recipe__info-icon"]}>
            <use href={icon}></use>
         </svg>
         <span className={classes["recipe__info-data"]}>{value}</span>
         <span className={classes["recipe__info-text"]}>{title}</span>
         <>{children}</>
      </div>
   );
};

export default RecipeInfo;
