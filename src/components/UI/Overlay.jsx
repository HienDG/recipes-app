import classes from "./Overlay.module.scss";

const Overlay = (props) => {
   return <div className={classes.overlay}>{props.children}</div>;
};

export default Overlay;
