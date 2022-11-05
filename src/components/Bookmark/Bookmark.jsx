import classes from "./Bookmark.module.scss";
import Spinner from "../UI/Spinner";
import BookmarkItem from "./BookmarkItem";
import Pagination from "../Recipes/Pagination";

import { getAllBookmark, requestBookmarkRecipe } from "../utils/api";
import { useEffect, useState } from "react";

const Bookmark = (props) => {
  const [recipe, setRecipe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState({ min: 0, max: 12 });
  const [pagination, setPagination] = useState({ prev: 0, next: 2 });

  const maxLength = recipe.length;
  const getAll = async () => {
    setIsLoading(true);
    const data = await getAllBookmark();
    const arr = [];
    for (const key in data) {
      arr.push(data[key]);
    }
    setRecipe(() => {
      return [...arr];
    });
    setIsLoading(false);
  };
  useEffect(() => {
    try {
      getAll();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const recipes = [...recipe].slice(location.min, location.max);

  const deleteHandler = async (id) => {
    await requestBookmarkRecipe(id, null, "DELETE");
    await getAll();
    localStorage.removeItem(id);
  };

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

  const renderList = recipes.map((item, i) => (
    <BookmarkItem
      image={item.image}
      title={item.title}
      key={i}
      id={item.id}
      onDelete={deleteHandler}
      idRecipe={item.idRecipe}
    />
  ));

  return (
    <section>
      <div className={classes["group__title"]}>
        <h2 className={classes.title}>{props.title}</h2>
      </div>
      <ul className={classes.list}>{isLoading ? <Spinner /> : renderList}</ul>
      <>
        {maxLength < 12 ? null : (
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

export default Bookmark;
