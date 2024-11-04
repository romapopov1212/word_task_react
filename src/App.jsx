import React, {useEffect, useState} from 'react';

import {Menu} from 'antd';
import axios from "axios";

import CarCard from "./components/Car.jsx";


function getItem(label, key, icon, children, type){
  return{
    key,
    icon,
    label,
    children,
    type,
  };
}


const App = () => {

  const [car, setCar] = useState([]);
  const [carId, setCarId] = useState(1);
  const [carData, setCarData] = useState(null);

   const fetchCars = () => {
     axios.get('http://127.0.0.1:8000/cars/').then((response) => {
       const carResponse = response.data;
       const menuItems =[
           getItem('Список автомобилей', 'g1', null,
               carResponse.map(c=>{
                 return {label: c.type, key: c.id}
               }),
               "group"
           ),
       ]
       setCar(menuItems);
     })
   }

  const fetchCar = () => {
    axios.get(`http://127.0.0.1:8000/cars/${carId}`).then(response => {setCarData(response.data);})
  }

   useEffect(() => {
     fetchCars();
   },  []);


  useEffect(() => {
    fetchCar();
  },  [carId]);

  const onClick = (e) =>{
    setCarId(e.key);
  };
  return (
      <div className="flex">
      <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={car}
      className="h-screen overflow-scroll"
      />
        <div className="mx-auto my-auto">
          {carData ? <CarCard car={carData}/> : <p>Загрузка данных автомобиля...</p>}
        </div>

      </div>
  )
};

export default App;