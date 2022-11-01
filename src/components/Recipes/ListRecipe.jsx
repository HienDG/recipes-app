import { Link } from "react-router-dom";
import classes from "./GroupRecipes.module.scss";

const ListRecipe = (props) => {
   return (
      <li className={classes.item}>
         <Link>
            <div className={classes["img__wrapper"]}>
               <img src={props.image} alt={props.image} className={classes.img} />
            </div>
            <h3 className={classes.title}>{props.title}</h3>
         </Link>
      </li>
   );
};

export default ListRecipe;
