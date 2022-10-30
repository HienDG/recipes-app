import classes from "./Spinner.module.scss";

const Spinner = () => {
   return (
      <div className={classes["spinner__container"]}>
         <div className={classes["lds-dual-ring"]}></div>;
      </div>
   );
};

export default Spinner;
