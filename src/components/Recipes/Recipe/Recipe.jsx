import classes from "./Recipe.module.scss";
import RecipeFigure from "./figure/RecipeFigure";
import RecipeDetail from "./detail/RecipeDetail";
import RecipeIngredientList from "./ingredients/RecipeIngredientList";
import RecipeDirections from "./directions/RecipeDirections";
import Card from "../../UI/Card";

const Recipe = (props) => {
   const { cooking_time: time, id, image_url: image, ingredients, publisher, servings, source_url: source, title } = props.recipe;

   return (
      <Card className={classes.recipe}>
         <RecipeFigure image={image} title={title} />
         <RecipeDetail time={time} servings={servings} id={id} />
         <RecipeIngredientList ingredients={ingredients ? ingredients : []} />
         <RecipeDirections publisher={publisher} source={source} />
      </Card>
   );
};

export default Recipe;
