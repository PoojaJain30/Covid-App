import React from "react";
import "./card.style.css";
export const Card = (props)=> (
    <div className="card-container">
         <h3>{props.data.state}</h3>
         <p>Active Cases: {props.data.active}</p>
         <p>Cases: {props.data.cases}</p>
        <p>Deaths: {props.data.deaths}</p>
        <div className="cases-today">
        <p>Today Cases: {props.data.todayCases}</p>
        <p>Today Deaths: {props.data.todayDeaths}</p>
        </div>
    </div>
   
);