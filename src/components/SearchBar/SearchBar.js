/* Search Bar Component */
import React from 'react';
import './SearchBar.css';

// un objeto que contiene las diferentes opciones de búsqueda 
const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {

  // render sort by options method
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      // una variable para almacenar los valores de las claves
      // de las búsquedas por opción
      let sortByOptionValue = sortByOptions[sortByOption]; // 👏
    });
  }
  
  // render method
  render() {
    return(

    )
  }
}

export default SearchBar;