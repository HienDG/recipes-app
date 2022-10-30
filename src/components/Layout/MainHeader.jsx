import logo from "../../assets/logo.png";
import classes from "./MainHeader.module.scss";
import SearchBar from "../Form/SearchBar";

import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import store from "../../store";

const MainHeader = () => {
   const authContext = useContext(store);
   const { isLoggedIn, logout } = authContext;
   console.log(isLoggedIn);
   const navigate = useNavigate();
   const navigateHandler = () => {
      navigate("/register");
   };

   const navigateToLogin = () => {
      navigate("/login");
   };

   const logoutBtn = (
      <button type="" className={classes.btn} onClick={logout}>
         Logout
      </button>
   );
   const initialBtn = (
      <>
         <button type="" className={classes.btn} onClick={navigateHandler}>
            Sign Up
         </button>
         <button type="" className={classes.btn} onClick={navigateToLogin}>
            Sign In
         </button>
      </>
   );

   return (
      <header>
         <Link className={classes.welcome} to="/">
            <img src={logo} alt="Logo" className={classes.logo} />
         </Link>
         <SearchBar />
         <div className={classes["group__btn"]}>{isLoggedIn ? logoutBtn : initialBtn}</div>
      </header>
   );
};

export default MainHeader;
