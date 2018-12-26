/* Search Bar Component */
import React from 'react';
import './SearchBar.css';

/*
TODO: 
Inside of the constructor, set the initial state of the search bar.
Use this.state and set it equal to an empty object.
*/

// un objeto que contiene las diferentes opciones de búsqueda 
const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {

  // constructor method
  constructor(props) {
    super(props);
    // establece el estado inicial del componente
    this.state = {
      'term': '',
      'location': '',
      'sortBy': 'best_match'
    };
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption]; // 👏
      return <li key={sortByOptionValue}>{sortByOption}</li>
    });
  }

  // task: estilizar la opción seleccionada actualmente
  getSortByClass(sortByOptions) {
    /*
    Inside, use an if statement to check if the state value of sortBy is equal to the provided sortByOption. 
    If it is, return 'active', otherwise, return an empty string ('').
    */
    if (sortBy == sortByOption) {
      return 'active';
    } else {
      return '';
    }
  }
  
  render() {
    return (
      // inject HTML (JSX)
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a href="www.#.com">Let's Go</a>
        </div>
      </div>
    )
  }
}

export default SearchBar;