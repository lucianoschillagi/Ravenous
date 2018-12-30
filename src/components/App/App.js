/* App component */
import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import Yelp from '../../util/Yelp';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      businesses: [],
    };

    this.searchYelp = this.searchYelp.bind(this);
  }

  // task: configurar el tipo de búsqueda que puede realizar el usuario.
  // que puede ser por término, ubicación o ordenado por (tres opciones disponibles)
  searchYelp(term, location, sortBy) {
    console.log(`${term}, ${location} , ${sortBy}`)
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses});
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

