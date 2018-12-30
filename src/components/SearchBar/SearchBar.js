/* Search Bar Component */
import React from 'react';
import './SearchBar.css';

// Abstract: una barra de búsqueda para que el usuario busque y obtenga
// resultados de acuerdo a ciertos criterios de búsqueda.
class SearchBar extends React.Component {
  
  constructor(props) {
    super(props);
    // el estado inicial de componente
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
    };
    // vincula los métodos dentro del constructor (para que formen parte del componente)
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }

  getSortByClass(sortByOption) {
    if (sortByOption === this.state.sortBy) {
      return 'active';
    }  
    return '';
  }

  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption});
  }

  // task: manejar la información ingresada por el usuario en el
  // placeholder 'Search Businesses'
  handleTermChange(event) {
    // le pasa a la propiedad 'term' el valor obtenido
    this.setState({ term: event.target.value});
  }
  
  // task: manejar la información ingresada por el usuario en el
  // placeholder 'Where?'
  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }

  // task: realizar la búsqueda de acuerdo a la interacción del usuario
  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    event.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (<li className={this.getSortByClass(sortByOptionValue)}
                  key={sortByOptionValue}
                  onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                {sortByOption}
             </li>);
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
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    )
  }
}

export default SearchBar;