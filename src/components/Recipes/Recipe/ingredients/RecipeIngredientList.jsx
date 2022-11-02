import classes from "./../Recipe.module.scss";
import RecipeIngredientItem from "./RecipeIngredientItem";

const RecipeIngredientList = ({ ingredients }) => {
   const renderList = ingredients.map((ingredient, i) => (
      <RecipeIngredientItem quantity={ingredient.quantity} unit={ingredient.unit} key={i} description={ingredient.description} />
   ));
   return (
      <div className={classes["recipe__ingredients"]}>
         <h2 className={classes["heading--2"]}>Recipe ingredients</h2>
         <ul className={classes["recipe__ingredient-list"]}>{renderList}</ul>
      </div>
   );
};

export default RecipeIngredientList;
