import { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
function FoodBox({ food, addFood }) {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddFood = () => {
    addFood({ ...food, quantity: parseInt(quantity) });
    setQuantity(1);
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.img} alt={food.name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.cal} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value={quantity}
                onChange={handleChange}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={handleAddFood}>
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
FoodBox.propTypes = {
  food: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    cal: PropTypes.number.isRequired,
  }).isRequired,
  addFood: PropTypes.func.isRequired,
};

export default FoodBox;