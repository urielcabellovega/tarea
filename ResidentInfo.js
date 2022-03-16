import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const ResidentInfo = ({ residentUrl }) => {
  const [resident, setResident] = useState([]);

  useEffect(() => {
    axios.get(residentUrl).then((res) => setResident(res.data));
  }, [residentUrl]);
  console.log(resident)
  return (
    <div id="ResidentInfo">
        <img src={resident.image} alt="personaje"/>
        <p>Name: {resident.name}</p>
        <p>Status: {resident.status}</p>
        <p>Origin: {resident.origin?.name}</p>
        <p>Episodes: {resident.episode?.length}</p>
       
      
    </div>
  );
};

export default ResidentInfo;