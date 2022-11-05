import { useNavigate } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

import classes from "./SearchBar.module.scss";
import icons from "../../assets/icons.svg";

const searchIcon = `${icons}#icon-search`;
const searchBtn = `${classes.btn} ${classes["search__btn"]}`;

const regexp = /^[a-z]{1,20}$/gim;

const SearchBar = () => {
  const { value: enteredQuery, change, reset, isValue } = useSearch(regexp);

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    const notAVoidString = !!enteredQuery;

    if (isValue) {
      navigate(`recipes/search/${enteredQuery}`);
    }

    if (!notAVoidString) {
      navigate("/");
    }
    reset();
  };

  return (
    <form className={classes.search} onSubmit={submitHandler}>
      <input
        type="text"
        className={classes["search__field"]}
        placeholder="Search over 1,000,000 recipes..."
        value={enteredQuery}
        onChange={change}
      />
      <button className={searchBtn}>
        <svg className={classes["search__icon"]}>
          <use href={searchIcon}></use>
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
