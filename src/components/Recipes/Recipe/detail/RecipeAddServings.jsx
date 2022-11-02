import classes from "./../Recipe.module.scss";

const RecipeAddServings = ({ icons }) => {
   return (
      <div className={classes["recipe__info-buttons"]}>
         {icons.map((icon, i) => (
            <button className={classes["btn--tiny"]} key={i}>
               <svg>
                  <use href={icon}></use>
               </svg>
            </button>
         ))}
      </div>
   );
};

export default RecipeAddServings;
