import React from 'react'
import"./recipe.css"
const Recipe =({title,calorise,image,ingrideants,url,source}) => {
  return (
    <>
    
    <div className = "recipe" ><h1>{title}</h1>
    <span className="badge badge-pill badge-danger">{source}</span>
   <ol >{ingrideants.map(ingrideants=>(
      <li className="list">{ingrideants.text}</li>
    ))}</ol>
    <p>calorise : {calorise}</p>
    <a href={url}><img src={image}alt="#" /> </a>




  

   
</div>

   </>
    
  )
}
export default Recipe;

