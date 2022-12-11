import React, { useEffect } from 'react';
import Category from './Components/Category';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Laptops from './Components/Laptops';
import Mobile from './Components/Mobile';
import { useState } from 'react';
function App() {
  const[data, setData]=useState([]);
    const getData = () => {
      fetch('http://localhost:3000/Categories')
     .then((res) => res.json())
     .then((responce) => setData(responce));

    }
    useEffect(() => {
      getData()
    },

    [])

  const allMobiles = data.filter((mob) => {
    if (mob.caregory == 'mobile') return mob

  })
  const allLaptops = data.filter((Lap) => {
    if (Lap.caregory == 'laptop') return Lap

  })  
  if(allLaptops) console.log(allLaptops)
  if(allMobiles) console.log(allMobiles)
  return (
    <div >
     <BrowserRouter>
        
        <Routes>
        <Route path="/" element={<Category data={data}/>} />
          <Route path="/Mobiles" element={<Mobile mob={allMobiles} />} />
          <Route path="/Laptops" element={<Laptops Lap={allLaptops} />} />
        </Routes>
      </BrowserRouter>
    <Category/>
    </div>
  );
}

export default App;
