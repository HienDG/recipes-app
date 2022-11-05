import classes from "./GroupRecipes.module.scss";
import ListRecipe from "./ListRecipe";
import Pagination from "./Pagination";
import ErrorMessage from "../UI/ErrorMessage";

import { useState } from "react";

const SearchResult = (props) => {
  const [location, setLocation] = useState({ min: 0, max: 12 });
  const [pagination, setPagination] = useState({ prev: 0, next: 2 });
  const [isSorted, setIsSorted] = useState(false);
  const maxLength = props.recipes.length;
  const recipes = isSorted
    ? [...props.recipes].sort((a, b) => a.id.localeCompare(b.id))
    : [...props.recipes].slice(location.min, location.max);

  const renderList = recipes.map((item, i) => (
    <ListRecipe
      key={i}
      title={item.title}
      image={item["image_url"]}
      id={item.id}
      data={props.title}
    />
  ));

  const length = !!maxLength;

  const nextPages = () => {
    setLocation((prevState) => {
      return { min: prevState.min + 12, max: prevState.max + 12 };
    });

    setPagination((prevState) => {
      return { prev: prevState.prev + 1, next: prevState.next + 1 };
    });
  };
  const prevPages = () => {
    setLocation((prevState) => {
      return { min: prevState.min - 12, max: prevState.max - 12 };
    });

    setPagination((prevState) => {
      return { prev: prevState.prev - 1, next: prevState.next - 1 };
    });
  };

  const sortedHandler = () => {
    setIsSorted(!isSorted);
  };

  return (
    <section>
      <div className={classes["group__title"]}>
        <h2 className={classes.title}>{props.title}</h2>
        <div>
          <button className={classes.btn} onClick={sortedHandler}>
            Sort &darr;
          </button>
        </div>
      </div>
      <ul className={classes.list}>{length ? renderList : <ErrorMessage />}</ul>
      <>
        {maxLength <= 12 ? null : (
          <Pagination
            length={location}
            maxLength={maxLength}
            onNext={nextPages}
            onPrev={prevPages}
            page={pagination}
          />
        )}
      </>
    </section>
  );
};

export default SearchResult;
