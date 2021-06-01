import React, { useState } from "react";

function PlantCard({Id,Name,Image,Price,priceChanger}) {
  const[stock,setStock]=useState(true)
  const[change,setChange]=useState(false)
  const[price,setPrice]=useState("")

  function changesetting(e){
    e.preventDefault()
    setChange(!change)
    
  }
  function changePrice(e){
    e.preventDefault()
    setPrice(e.target.value)
  }
  function handleChange(e){
    e.preventDefault()
    //priceChanger(Id,price)
    const newPr=parseInt(price)
    priceChanger(Id,newPr)
  }

  return (
    <li className="card" key={Id}>
      <img src={Image} alt={Name} />
      <h4>{Name}</h4>
      <p>Price: {Price}</p>
      <button onClick={changesetting}>Edit Price</button>
      {change ? <form onSubmit={()=>handleChange}><input type="number" name="cost" placeholder="New Price" value={price} onChange={changePrice}/>
      <button type="submit">Submit</button> </form>
      : undefined}

      {stock ? (
        <button className="primary" onClick={()=>setStock(!stock)}>In Stock</button>
      ) : (
        <button onClick={()=>setStock(!stock)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
