import classes from "./../Recipe.module.scss";

const RecipeGenerate = ({ icon }) => {
   return (
      <div className={classes["recipe__user-generated"]}>
         <svg>
            <use href={icon}></use>
         </svg>
      </div>
   );
};
export default RecipeGenerate;
