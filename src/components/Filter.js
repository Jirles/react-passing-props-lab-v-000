import React from 'react';

const Filter = (props) => {
  return (
    <select onChange={props.handleChange} defaultValue='all'>
      <option value='all'>All</option>
      {props.filters.map(filter =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>
  );
}

Filter.defaultProps ={ 
  filters: [],
  handleChange: () => {console.log('idk what this is for')}
}

export default Filter;
