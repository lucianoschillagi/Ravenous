/* App component */
import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';
import Yelp from './util/Yelp';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
    };
    this.searchYelp = this.searchYelp.bind(this);
  };

  // task: configurar el tipo de búsqueda que puede realizar el usuario
  searchYelp(term, location, sortBy) {
    console.log(`You are searching for ${term}, ${location}, and ${sortBy}`);
    Yelp.searchYelp(term, location, sortBy).then((businesses) => {
      this.searchYelp( {businesses: businesses});
    });
  }

  render() {
    return (
      // inject JSX (HTML)
      <div className="App">
        <h1>ravenous</h1>
        < SearchBar searchYelp={this.searchYelp} />
        < BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;

