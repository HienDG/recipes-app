import { useState, useEffect } from "react";

import icons from "../../../../assets/icons.svg";
import classes from "./../Recipe.module.scss";

import { requestBookmarkRecipe } from "../../../utils/api";

const bookmarkIcon = `${icons}#icon-bookmark`;
const bookmarkFillIcon = `${icons}#icon-bookmark-fill`;

const retrieveData = (id) => {
  const init = JSON.parse(localStorage.getItem(id));
  if (!init) return false;
  const data = init.id === id ? { isChanged: init.isChanged } : { isChanged: false };
  return data.isChanged;
};

const RecipeBookmark = ({ id, recipe, data }) => {
  const init = retrieveData(id);
  const [isChanged, setIsChanged] = useState(init);
  const bookmark = {
    title: recipe.title,
    publisher: recipe.publisher,
    image: recipe.image_url,
    id: recipe.id,
    idRecipe: data,
  };

  const bookmarkChangeHandler = () => {
    setIsChanged(!isChanged);
  };

  useEffect(() => {
    if (isChanged) {
      localStorage.setItem(id, JSON.stringify({ isChanged, id }));
      requestBookmarkRecipe(id, bookmark, "PUT").catch((err) => console.log(err));
    } else {
      localStorage.removeItem(id);
      requestBookmarkRecipe(id, "", "DELETE").catch((err) => console.log(err));
    }
  }, [isChanged]);

  return (
    <button className={classes["btn--round"]} onClick={bookmarkChangeHandler} disabled={!id}>
      <svg>
        <use href={isChanged ? bookmarkFillIcon : bookmarkIcon}></use>
      </svg>
    </button>
  );
};

export default RecipeBookmark;
