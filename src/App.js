import './App.css';

import map from './Images/map.jpg';
import coast from './Images/coast.jpg';
import fjords from './Images/fjords.jpg';
import stairway from './Images/stairway.jpg';


function App() {


  const photoArray = [map, coast, fjords, stairway];

  return (
    <div className="App">
      <h1>Revolving Carousel</h1>

      {photoArray.map((image) => (
        <img className='photoImage' src={image} />
      ))}

      <img className='photoImage' src={coast} />


    </div>
  );
}

export default App;
