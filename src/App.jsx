import React, {useEffect, useState} from 'react';

import {Menu} from 'antd';
import axios from "axios";
import Car from "./components/Car.jsx";

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

  const [currencies, setCurrencies] = useState([]);

   const fetchCurrencies = () => {
     axios.get('http://127.0.0.1:8000/cars/').then((response) => {
       const currenciesResponce = response.data;
       const menuItems =[
           getItem('Список автомобилей', 'g1', null,
               currenciesResponce.map(c=>{
                 return {label: c.type, key: c.id}
               }),
               "group"
           ),
       ]
       setCurrencies(menuItems);
     })
   }

   useEffect(() => {
     fetchCurrencies();
   },  [])

  const onClick = (e) =>{
    console.log(e);
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
      items={currencies}
      />
        <Car/>
      </div>
  )
};

export default App;