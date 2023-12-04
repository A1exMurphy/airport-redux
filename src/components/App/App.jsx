import React, { useState } from 'react';
// import axios from 'axios';
// import { HashRouter as Router, Route } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const airlines= useSelector((store) => store.airlines)



  const getAirlines = () => {
    dispatch() {
      type: "GET_ALL_AIRLINES"
      payload: 
    }
  }

  return (
    <div>
      <h1>Redux Airport</h1>
      <input placeholder='Airline Name' />

      <table>{airlines.map((airlines) => {
        return (
          <tr>
            {airlines.name}
          </tr>
        )
      })}</table>
    </div>
  );
}

export default App;
