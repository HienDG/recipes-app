import classes from "./BookmarkList.module.scss";
import icons from "../../assets/icons.svg";

const smileIcon = `${icons}#icon-smile`;

const BookmarkList = () => {
   return (
      <div className={classes["bookmarks"]}>
         <ul className={classes["bookmarks__list"]}>
            <div className={classes["message"]}>
               <div>
                  <svg>
                     <use href={smileIcon}></use>
                  </svg>
               </div>
               <p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
            </div>

            <li className={classes["preview"]}>
               <a className={classes["preview__link"]} href="#23456">
                  <figure className={classes["preview__fig"]}>
                     <img src="src/img/test-1.jpg" alt="Test" />
                  </figure>
                  <div className={classes["preview__data"]}>
                     <h4 className={classes["preview__name"]}>Pasta with Tomato Cream ...</h4>
                     <p className={classes["preview__publisher"]}>The Pioneer Woman</p>
                  </div>
               </a>
            </li>
         </ul>
      </div>
   );
};

export default BookmarkList;
