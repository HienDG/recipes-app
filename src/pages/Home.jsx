import GroupRecipes from "../components/Recipes/GroupRecipes";

const vegetables = ["carrot", "broccoli", "asparagus", "cauliflower"];
const fruits = ["apple", "avocado", "blueberry", "mango"];
const meats = ["goat", "lamb", "turkey", "pork"];
const seafoods = ["fish", "crab", "lobster", "boysenberry"];

const Home = () => {
   return (
      <div>
         <GroupRecipes title="Vegetables" items={vegetables} />
         <GroupRecipes title="Fruits" items={fruits} />
         <GroupRecipes title="Meats" items={meats} />
         <GroupRecipes title="Sea foods" items={seafoods} />
      </div>
   );
};

export default Home;
