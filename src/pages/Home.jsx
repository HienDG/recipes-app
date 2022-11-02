import GroupRecipes from "../components/Recipes/GroupRecipes";

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

export default Home;
