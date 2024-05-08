// App.js

import { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import foodsData from './resources/FoodData';

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [selectedFoods, setSelectedFoods] = useState([]);
  
  const addFood = (food) => {
    const index = selectedFoods.findIndex((item) => item.name === food.name);
    if (index !== -1) {
      const updatedFoods = [...selectedFoods];
      updatedFoods[index].quantity += food.quantity;
      setSelectedFoods(updatedFoods);
    } else {
      setSelectedFoods([...selectedFoods, food]);
    }
  };
  
  const resetFood = (index) => {
    const updatedFoods = [...selectedFoods];
    updatedFoods[index].quantity = 0;
    setSelectedFoods(updatedFoods.filter((food) => food.quantity > 0));
  };

  return (
    <div className="App">
      <h1> Pro  Nutrition </h1>
      <div className="food-container-wrapper">
        <div className="food-container">
          <Search foods={foods} setFoods={setFoods} />
          {foods.map((food, index) => (
            <div className="food-row" key={index}>
              <FoodBox food={food} addFood={addFood} />
            </div>
          ))}
        </div>
        <div className="selected-foods">
          <ul>
            {selectedFoods.map((food, index) => (
              <li key={index}>
                {food.quantity} {food.name} = {food.cal * food.quantity} cal{' '}
                <button onClick={() => resetFood(index)}>Reset</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
