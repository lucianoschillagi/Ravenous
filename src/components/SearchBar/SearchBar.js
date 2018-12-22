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
    // accede a las claves del objeto 'sortByOptions'
    return Object.keys(sortByOptions) // Keys: 'Best Match', 'Highest Rated', 'Most Reviewed'
  }
  // render method
  render() {
    return(

    )
  }
}

export default SearchBar;