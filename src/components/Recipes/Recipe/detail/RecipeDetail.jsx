import RecipeInfo from "./RecipeInfo";
import RecipeAddServings from "./RecipeAddServings";
import RecipeBookmark from "./RecipeBookmark";
import RecipeGenerate from "./RecipeGenerate";

import classes from "./../Recipe.module.scss";
import icons from "../../../../assets/icons.svg";

const clockIcon = `${icons}#icon-clock`;
const usersIcon = `${icons}#icon-users`;
const btnIcons = [`${icons}#icon-minus-circle`, `${icons}#icon-plus-circle`];
const userIcon = `${icons}#icon-user`;

const RecipeDetail = ({ time, servings, id }) => {
   return (
      <div className={classes["recipe__details"]}>
         <RecipeInfo title="minutes" value={time} icon={clockIcon} />
         <RecipeInfo title="servings" value={servings} icon={usersIcon}>
            <RecipeAddServings icons={btnIcons} />
         </RecipeInfo>
         <RecipeGenerate icon={userIcon} />
         <RecipeBookmark id={id} />
      </div>
   );
};

export default RecipeDetail;
