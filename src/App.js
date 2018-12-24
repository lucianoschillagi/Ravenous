/* App component */
import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';

/*
Take a look at BusinessList.js. What do you notice about the contents of the BusinessList div?

There's a lot of repetition here. Specifically, the <Business /> component is repeated six times. 
Recall that we manually did this in the BusinessList component so that we can simulate a list of returned business. 
We'll refactor this to remove some of the component repetition.

Go back to App.js. Under the business object, create a businesses array. 
The array should hold six references to the business object.
*/

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

// crea una array que contiene 6 objetos 'business'
const businesses = [business, business, business, business, business, business];

class App extends React.Component {
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

