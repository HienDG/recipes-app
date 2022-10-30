import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./SearchBar.module.scss";
import icons from "../../assets/icons.svg";

const searchIcon = `${icons}#icon-search`;
const searchBtn = `${classes.btn} ${classes["search__btn"]}`;

const SearchBar = () => {
   const inputQueryRef = useRef();
   const navigate = useNavigate();

   const submitHandler = (event) => {
      event.preventDefault();
      const enteredQuery = inputQueryRef.current.value;

      const notAVoidString = !!enteredQuery;

      if (notAVoidString) {
      } else {
         navigate("/not-found");
      }
   };

   return (
      <form className={classes.search} onSubmit={submitHandler}>
         <input
            type="text"
            className={classes["search__field"]}
            placeholder="Search over 1,000,000 recipes..."
            ref={inputQueryRef}
         />
         <button className={searchBtn}>
            <svg className={classes["search__icon"]}>
               <use href={searchIcon}></use>
            </svg>
            <span>Search</span>
         </button>
      </form>
   );
};

export default SearchBar;
