/* App component */
import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';

class App extends React.Component {

  // task: configurar el tipo de búsqueda que puede realizar el usuario
  searchYelp(term, location, sortBy) {

  }

  render() {
    return (
      // inject JSX (HTML)
      <div className="App">
        <h1>ravenous</h1>
        < SearchBar />
        < BusinessList />
      </div>
    );
  }
}

export default App;

