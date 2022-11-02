import classes from "./GroupRecipes.module.scss";
import icons from "../../assets/icons.svg";

const prevIcon = `${icons}#icon-arrow-left`;
const nextIcon = `${icons}#icon-arrow-right`;

const Pagination = (props) => {
   const { length, maxLength, page } = props;
   return (
      <div className={classes.pagination}>
         {length.min < 12 ? null : (
            <button className={`${classes.btn} ${classes["btn--prev"]}`} onClick={props.onPrev}>
               <svg>
                  <use href={prevIcon}></use>
               </svg>
               <span>Page {page.prev}</span>
            </button>
         )}
         {length.max >= maxLength ? null : (
            <button className={`${classes.btn} ${classes["btn--next"]}`} onClick={props.onNext}>
               <span>Page {page.next}</span>
               <svg>
                  <use href={nextIcon}></use>
               </svg>
            </button>
         )}
      </div>
   );
};

export default Pagination;
