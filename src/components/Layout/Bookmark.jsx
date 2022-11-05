import icons from "../../assets/icons.svg";
import classes from "./Bookmark.module.scss";

import { Link } from "react-router-dom";

const bookmarkIcon = `${icons}#icon-bookmark`;
const Bookmark = () => {
  return (
    <Link className={classes["nav__btn"]} to="/recipes/bookmark">
      <svg className={classes["nav__icon"]}>
        <use href={bookmarkIcon}></use>
      </svg>
      <span>Bookmarks</span>
    </Link>
  );
};

export default Bookmark;
