import { Link, useLocation } from "react-router-dom";
import classes from "./GroupRecipes.module.scss";

import { useContext } from "react";
import store from "../../store";

const ListRecipe = (props) => {
   const authContext = useContext(store);
   const location = useLocation();
   const { pathname } = location;
   const { isLoggedIn } = authContext;

   const path = pathname.length === 1 ? `/recipes/search/${props.recipe}/${props.id}` : `${pathname}/${props.id}`;
   const loginPath = "/login";
   return (
      <li className={classes.item}>
         <Link to={isLoggedIn ? path : loginPath}>
            <div className={classes["img__wrapper"]}>
               <img src={props.image} alt={props.image} className={classes.img} />
            </div>
            <h3 className={classes.title}>{props.title}</h3>
         </Link>
      </li>
   );
};

export default ListRecipe;
