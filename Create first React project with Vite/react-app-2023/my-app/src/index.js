import React from 'react';
import ReactDOM from 'react-dom';



const todoTitle = "Call Family";
const todoDesc = "dchfchg ghfgh gfhgfg gfhfhgf jhfgg fghgf";
const date= new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear= date.getFullYear();

// const headingStyle = {
//   backgroundColor : "purple",
//   color : "white",
//   textAlign : "center",
//   padding : "15px"
// };

ReactDOM.render(
  <div>
    <h1 className='headingStyle'>Todo App</h1>
    <h3>{todoTitle}</h3>
    <p>{todoDesc}</p>
    <p>{dateName + "/" + monthName + "/" + currentYear}</p>
  </div>,
  document.getElementById('root')
  
);
