import React from 'react';
import Slide from './Slide';
import {  } from './App.css';
function App() {
  const slides = [
    {
      id: 'slide1',
      text: 'Slide 1',
    },
    {
      id: 'slide2',
      text: 'Slide 2',
    },
    {
      id: 'slide3',
      text: 'Slide 3',
    },
  ];
  return (
    <div className="App">
      <Slide  slides={slides}/>
    </div>
  );
}

export default App;
