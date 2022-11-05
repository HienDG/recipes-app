import classes from "./Recipe.module.scss";
import RecipeFigure from "./figure/RecipeFigure";
import RecipeDetail from "./detail/RecipeDetail";
import RecipeIngredientList from "./ingredients/RecipeIngredientList";
import RecipeDirections from "./directions/RecipeDirections";
import Card from "../../UI/Card";

import { useState } from "react";

const Recipe = (props) => {
  const {
    cooking_time: time,
    id,
    image_url: image,
    ingredients,
    publisher,
    servings,
    source_url: source,
    title,
  } = props.recipe;
  const [ingredient, setIngredient] = useState(ingredients ? [...ingredients] : []);
  const ing = ingredients ? [...ingredients] : [];
  const updatingIngredientsHandler = (newServing) => {
    setIngredient(() => {
      const newIngredients = ingredient.map((item, i) => {
        const newQuantity = (ing[i].quantity * newServing) / servings;
        return {
          quantity: newQuantity,
          unit: item.unit,
          description: item.description,
        };
      });
      return [...newIngredients];
    });
  };

  return (
    <Card className={classes.recipe}>
      <RecipeFigure image={image} title={title} />
      <RecipeDetail
        time={time}
        title={title}
        servings={servings}
        id={id}
        onUpdate={updatingIngredientsHandler}
        recipe={props.recipe}
        data={props.data}
      />
      <RecipeIngredientList ingredients={ingredient} />
      <RecipeDirections publisher={publisher} source={source} />
    </Card>
  );
};

export default Recipe;
