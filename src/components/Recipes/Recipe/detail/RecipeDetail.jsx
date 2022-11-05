import { useState, useEffect } from "react";

import RecipeInfo from "./RecipeInfo";
import RecipeAddServings from "./RecipeAddServings";
import RecipeBookmark from "./RecipeBookmark";
import RecipeGenerate from "./RecipeGenerate";

import classes from "./../Recipe.module.scss";
import icons from "../../../../assets/icons.svg";

const clockIcon = `${icons}#icon-clock`;
const usersIcon = `${icons}#icon-users`;
const userIcon = `${icons}#icon-user`;

const RecipeDetail = ({ time, servings, id, onUpdate, recipe, data }) => {
  const [updatingServing, setUpdatingServing] = useState(servings);
  const [isDisable, setIsDisable] = useState({ minus: false, plus: false });
  const increaseServingHandler = () => {
    if (updatingServing === 20) return;
    setUpdatingServing(() => updatingServing + 1);
    setIsDisable((prevState) => {
      return { minus: false, plus: prevState.plus };
    });
  };

  const decreaseServingHandler = () => {
    if (updatingServing === 1) return;
    setUpdatingServing(() => updatingServing - 1);
    setIsDisable((prevState) => {
      return { minus: prevState.minus, plus: false };
    });
  };

  useEffect(() => {
    onUpdate(updatingServing);
    if (updatingServing === 1)
      setIsDisable((prevState) => {
        return { minus: true, plus: prevState.plus };
      });
    if (updatingServing === 20)
      setIsDisable((prevState) => {
        return { minus: prevState.minus, plus: true };
      });
  }, [updatingServing]);

  return (
    <div className={classes["recipe__details"]}>
      <RecipeInfo title="minutes" value={time} icon={clockIcon} />
      <RecipeInfo title="servings" value={updatingServing} icon={usersIcon}>
        <RecipeAddServings
          onIncrease={increaseServingHandler}
          onDecrease={decreaseServingHandler}
          isDisable={isDisable}
        />
      </RecipeInfo>
      <RecipeGenerate icon={userIcon} />
      <RecipeBookmark id={id} recipe={recipe} data={data} />
    </div>
  );
};

export default RecipeDetail;
