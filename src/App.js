import React, { Suspense } from "react";

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

// import SignUp from "./pages/SignUp";
// import SignIn from "./pages/SignIn";
// import Home from "./pages/Home";
// import NotFoundPage from "./pages/NotFoundPage";
// import RecipeReview from "./pages/RecipePreview";
// import SearchRecipes from "./pages/SearchRecipes";
// import BookmarkPage from "./pages/BookmarkPage";

const Home = React.lazy(() => import("./pages/Home"));
const SignUp = React.lazy(() => import("./pages/SignUp"));
const SignIn = React.lazy(() => import("./pages/SignIn"));
const NotFoundPage = React.lazy(() => import("./pages/NotFoundPage"));
const RecipeReview = React.lazy(() => import("./pages/RecipePreview"));
const SearchRecipes = React.lazy(() => import("./pages/SearchRecipes"));
const BookmarkPage = React.lazy(() => import("./pages/BookmarkPage"));

const App = () => {
  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/recipes/search/:recipe" element={<SearchRecipes />} />
          <Route path="/recipes/search/:recipe/:idRecipe" element={<RecipeReview />} />
          <Route path="/recipes/bookmark" element={<BookmarkPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
