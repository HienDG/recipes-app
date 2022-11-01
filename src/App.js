import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import MealList from "./pages/MealList";

const App = () => {
   const location = useLocation();
   const path = location.pathname.slice(1, location.pathname.length);
   return (
      <Layout>
         <Routes>
            <Route path="/" element={<Home />} index />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path={path} element={<MealList item={path} />} />
            <Route path="*" element={<NotFoundPage />} />
         </Routes>
      </Layout>
   );
};

export default App;
