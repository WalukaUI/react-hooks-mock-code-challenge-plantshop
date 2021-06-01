import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
const [plants,setPlants]=useState([])
  const URL="http://localhost:6001/plants"


  useEffect(()=>{
    fetch(URL,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
      })
      .then(res=>res.json())
      .then(json=>setPlants(json))
    },[])

    function NewPlant(obj){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }
     fetch(URL,requestOptions)
     .then(res=>res.json())
     .then(j=>setPlants([...plants,j]))
    }

    function plantSearch(e){
     fetch(URL)
     .then(r=>r.json())
     .then(j=>{
       const filt=j.filter((x)=>{
         return x.name.includes(e)
       })
       setPlants(filt)
     })
    }
    function priceChanger(Id,Price){
     const newCost={price:Price}
     const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCost)
    }
    fetch(`${URL}/${Id}`,requestOptions)
    .then(r=>r.json())
    .then(j=>console.log(j))

    }

  return (
    <main>
      <NewPlantForm  newPlant={NewPlant}/>
      <Search plantSearch={plantSearch}/>
      <PlantList plants={plants} priceChange={priceChanger} />
    </main>
  );
}

export default PlantPage;
