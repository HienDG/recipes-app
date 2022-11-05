import GroupRecipes from "../components/Recipes/GroupRecipes";
import React from "react";
const Home = () => {
  return (
    <div>
      <GroupRecipes item="apple" />
      <GroupRecipes item="broccoli" />
      <GroupRecipes item="turkey" />
      <GroupRecipes item="fish" />
    </div>
  );
};

export default React.memo(Home);
