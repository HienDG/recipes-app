import { Link } from "react-router-dom";
import classes from "./Bookmark.module.scss";

const BookmarkItem = ({ image, title, id, onDelete, idRecipe }) => {
  return (
    <li className={classes.item}>
      <Link to={`/recipes/search/${idRecipe}/${id}`}>
        <div className={classes["img__wrapper"]}>
          <img src={image} alt={image} className={classes.img} />
        </div>
        <h3 className={classes.title}>{title}</h3>
      </Link>
      <div className={classes["group__btn"]}>
        <button type="" className={classes.btn} onClick={onDelete.bind(null, id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default BookmarkItem;
