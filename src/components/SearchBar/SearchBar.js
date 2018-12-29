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

    // enlaza los métodos definidos fuera del constructor con el constructor
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
  }

  // task: manejar la información ingresada por el usuario en el
  // placeholder 'Search Business'
  handleTermChange(event) {
    // le pasa a la propiedad 'term' el valor obtenido
    this.setState({ term: event.target.value});
  }

  // task: manejar la información ingresada por el usuario en el
  // placeholder 'Where?'
  handleLocationChange(event) {
    // le pasa a la propiedad 'location' el valor obtenido
    this.setState({ location: event.target.value});
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

  // TODO: estudiar bien este método antes de seguir avanzando...
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      let sortByOptionValue = sortByOptions[sortByOption]; // 👏
      return <li 
              key={sortByOptionValue} 
              onClick={this.handleSortByChange.bind(this.sortByOptionValue)} 
              className={this.getSortByClass(sortByOptionValue)}>{sortByOption} </li>;
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
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a href="www.#.com" onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    )
  }
}

export default SearchBar;