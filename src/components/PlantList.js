import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants,priceChanger}) {
  const getPlantsCards=plants.map((e)=>{
    return <PlantCard 
    key={e.id} 
    Id={e.id}
    Name={e.name}
    Image={e.image}
    Price={e.price}
    priceChanger={priceChanger} 
    />
  })
  return (
    <ul className="cards"> {getPlantsCards} </ul>
  );
}

export default PlantList;
