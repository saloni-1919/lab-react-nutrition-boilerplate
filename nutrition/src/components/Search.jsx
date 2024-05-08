import { useState } from 'react';
import PropTypes from 'prop-types';

function Search({ foods, setFoods }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    filterFoods(event.target.value);
  };

  const filterFoods = (searchTerm) => {
    const filteredFoods = foods.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFoods(filteredFoods);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search food..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}
Search.propTypes = {
  foods: PropTypes.array.isRequired,
  setFoods: PropTypes.func.isRequired,
};

export default Search;