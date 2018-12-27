/* Search Bar Component */
import React from 'react';
import './SearchBar.css';

// un objeto que contiene las diferentes opciones de búsqueda 
const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
    };
  }

  getSortByClass(sortByOption) {
    if (sortByOption === this.state.sortBy) {
      return 'active';
    }  
    return '';
  }

  // task: maneja el ordenamiento de acuerdo a la opción elegida
  handleSortByChange(sortByOption) {
    // actualiza el estado del objeto, específicamente el valor de la 
    // propiedad 'sortBy'
    this.setState({ sortBy:sortByOption });

  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption]; // 👏
      return <li key={sortByOptionValue}>{sortByOption}</li>
    });
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