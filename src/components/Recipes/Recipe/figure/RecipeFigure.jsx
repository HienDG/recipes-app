import classes from "./../Recipe.module.scss";

const RecipeFigure = (props) => {
   return (
      <figure className={classes["recipe__fig"]}>
         <img src={props.image} alt={props.title} className={classes["recipe__img"]} />
         <h1 className={classes["recipe__title"]}>
            <span>{props.title}</span>
         </h1>
      </figure>
   );
};

export default RecipeFigure;
