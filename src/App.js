import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
   return (
      <Layout>
         <Routes>
            <Route path="/" element={<Home />} index />
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="*" element={<NotFoundPage />} />
         </Routes>
      </Layout>
   );
};

export default App;
