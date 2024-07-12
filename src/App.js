import React, { useState } from 'react';
import './App.css';

import map from './Images/map.jpg';
import coast from './Images/coast.jpg';
import fjords from './Images/fjords.jpg';
import stairway from './Images/stairway.jpg';
import boat from './Images/boat.jpg';
import balloons from './Images/balloons.jpg';
import town from './Images/town.jpg';
import ocean from './Images/ocean.jpg';


function App() {


  const photoArray = [map, ocean, balloons, coast, town, fjords, boat, stairway];

  const [theStyle, setTheStyle] = useState({
    transform: 'perspective(1000px) rotateY(0deg)',
  });  
  const [rotateDegree, setRotateDegree] = useState(0);

  function updateRotate(increment) {
    const newRotateDegree = rotateDegree + increment;
    setRotateDegree(newRotateDegree);
    setTheStyle({ transform: `perspective(1000px) rotateY(${newRotateDegree}deg)` });
  };

  return (
    <div className="App">
      {/* <h1>Revolving Carousel</h1> */}

      <div style={theStyle} className='image-container'>
        {photoArray.map((image, index) => (
          <span key={index} style={{ '--i': index }}>
            <img className='photoImage' src={image} />
          </span>
        ))}
      </div>
      <div className='btn-container'>
        <button onClick={() => updateRotate(45)} >Next</button>
        <button onClick={() => updateRotate(-45)}>Prev.</button>
      </div>

      <img className='photoImage' src={ocean} />


    </div>
  );
}

export default App;
