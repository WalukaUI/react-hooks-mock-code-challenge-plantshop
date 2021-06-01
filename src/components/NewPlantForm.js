import React, { useState } from "react";

function NewPlantForm({newPlant}) {
const[aplant,setAplant]=useState({
  name:"",
  image:"",
  price:""
})

  function changeValofPlant(e){
    e.preventDefault()
      setAplant({...aplant,
       [e.target.name]:e.target.value})
    

  }
  function makeaPlant(e){
    e.preventDefault()
    newPlant(aplant)
    setAplant({
      name:"",
      image:"",
      price:""
    })
    alert("Plant successfully created!!")
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={makeaPlant}>
        <input type="text" name="name" placeholder="Plant name" value={aplant.name} onChange={changeValofPlant}/>
        <input type="text" name="image" placeholder="Image URL" value={aplant.image} onChange={changeValofPlant}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={aplant.price} onChange={changeValofPlant}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
