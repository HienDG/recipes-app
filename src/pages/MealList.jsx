const MealList = (props) => {
   const query = props.item.split("/")[1];
   const api = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}&key=0f844934-2347-4a86-a45e-7f4553e89dd3`;

   fetch(api)
      .then((res) => res.json())
      .then((data) => {
         console.log(data.data.recipes);
      });

   return <h1>{query} Pages</h1>;
};

export default MealList;
