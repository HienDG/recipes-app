import MainHeader from "./MainHeader";
import NavigationBar from "./NavigationBar";
import "./Layout.scss";

const Layout = (props) => {
   return (
      <>
         <MainHeader />
         <NavigationBar />
         <main>{props.children}</main>
      </>
   );
};

export default Layout;
