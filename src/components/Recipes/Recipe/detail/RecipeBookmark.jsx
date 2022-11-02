import classes from "./../Recipe.module.scss";
import icons from "../../../../assets/icons.svg";

import { useState } from "react";

const bookmarkIcon = `${icons}#icon-bookmark`;
const bookmarkFillIcon = `${icons}#icon-bookmark-fill`;

const retrieveData = (id) => {
   const init = JSON.parse(localStorage.getItem(id));
   if (!init) return false;
   const data = init.id === id ? { isChanged: init.isChanged } : { isChanged: false };
   return data.isChanged;
};

const RecipeBookmark = ({ id }) => {
   const init = retrieveData(id);
   const [isChanged, setIsChanged] = useState(init);

   const bookmarkChangeHandler = () => {
      setIsChanged(!isChanged);
   };
   if (isChanged) {
      localStorage.setItem(id, JSON.stringify({ isChanged, id }));
   } else {
      localStorage.removeItem(id);
   }

   return (
      <button className={classes["btn--round"]} onClick={bookmarkChangeHandler} disabled={!id}>
         <svg>
            <use href={isChanged ? bookmarkFillIcon : bookmarkIcon}></use>
         </svg>
      </button>
   );
};

export default RecipeBookmark;
