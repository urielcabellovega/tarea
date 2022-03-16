import './App.css';
import axios from "axios"
import { useState, useEffect } from "react";
import ResidentsList from './Components/ResidentsList';
import SearchBox from './Components/SearchBox';

function App() {
  
  const[location,setLocation]=useState({});

  useEffect(() =>{
    const random = Math.floor(Math.random()*126)+1;
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
      .then(res =>setLocation(res.data))

  },[]);

  console.log(location);
  
  return (
    <div className='App'>
      <img src='https://images6.alphacoders.com/876/876591.jpg' alt='Rick and Morty image' id='Firstimage'/>
      <h1>Rick and Morty wiki</h1>
      <SearchBox setLocation={setLocation} />
      <div id='LocationInfo'>
        <p>Name: {location.name}</p>
        <p>Type: {location.type}</p>
        <p>Dimension: {location.dimension}</p>
        <p>Population: {location.residents?.length}</p>
      </div >
      <ResidentsList residents={location.residents}/>
      
         

    
    </div>
  );
}

export default App;