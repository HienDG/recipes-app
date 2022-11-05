import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import RecipeReview from "./pages/RecipePreview";
import SearchRecipes from "./pages/SearchRecipes";
import BookmarkPage from "./pages/BookmarkPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/recipes/search/:recipe" element={<SearchRecipes />} />
        <Route path="/recipes/search/:recipe/:idRecipe" element={<RecipeReview />} />
        <Route path="/recipes/bookmark" element={<BookmarkPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
