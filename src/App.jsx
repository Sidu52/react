import React, { useState } from 'react'
import AddCarCommponent from './component/addCarCommponent';
import CarList from './component/carList';


export default function App() {
  const [carData, setCarData] = useState([]);

  const addCarDetail = (data) => {
    console.log("object", data)
    setCarData((prevData) => [...prevData, data]);
  };

  return (
    <div>
      <AddCarCommponent addCarDetail={addCarDetail} />
      <CarList carData={carData} />
    </div>
  )
}
