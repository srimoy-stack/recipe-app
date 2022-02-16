import { useEffect,useState } from "react";
import "./App.css"
import Recipe from "./Recipe";

const App = ()=>{

  const api_id ="7755f771";
  const app_api_key =  "088df3f1f499d15b79da3d110c953274"
                     
  const[recipes,setRecipes]=useState([])
  const[search,setSearch]=useState("")
  const[query,setQuery]=useState("chicken");



  const updateSearch=(e)=>{
    setSearch(e.target.value)
  }

useEffect(()=>{
  getRecipes();

},[query])
const getRecipes = async () =>{
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${api_id}&app_key=${app_api_key}`)
  const data = await response.json();
  setRecipes(data.hits)
}

const getQueries=(e)=>{
e.preventDefault();
  setQuery(search)
  setSearch("")
}

return(<div className="App">

  <center><h1>FOOD NETWORK</h1></center>
  <form action="#" className="search-form" onSubmit={getQueries}>
    <input type="text" className="search-bar"  value={search} onChange={updateSearch}/>
    <button  type="submit" className="search-button">Search</button>
  </form>
  <div className="recipes">
  {recipes.map(recipe =>(

 
    <Recipe title={recipe.recipe.label} calorise={recipe.recipe.calories} image={recipe.recipe.image} ingrideants={recipe.recipe.ingredients} url={recipe.recipe.url} source={recipe.recipe.source}/>
    ))}
    </div>

</div>

)

}
export default App;