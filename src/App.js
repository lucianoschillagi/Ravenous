/* App component */
import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';
import Yelp from './util/Yelp';

// crea una objeto (JSON) 'business' que contiene información estática
const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [
  business, 
  business, 
  business, 
  business,
  business,
  business
]

class App extends React.Component {

  // task: configurar el tipo de búsqueda que puede realizar el usuario
  searchYelp(term, location, sortBy) {
    console.log(`You are searching for ${term}, ${location}, and ${sortBy}`);
  }

  render() {
    return (
      // inject JSX (HTML)
      <div className="App">
        <h1>ravenous</h1>
        < SearchBar searchYelp={this.searchYelp} />
        < BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;

