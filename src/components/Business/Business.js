import React from 'react';
import './Business.css';

// crea una objeto 'business' que contiene información estática
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
}

// las 'instrucciones' para crear un componente 'Business'...
class Business extends React.Component {

  // render method
  render() {
    return (
      // HTML (JSX)
      <div className="Business">
          <div className="image-container">
            <img src={business.imageSrc} alt=''/>
          </div>
          <h2>{business.name}</h2>
          <div className="Business-information">
            <div className="Business-address">
              <p>{business.address}</p>
              <p>{business.state}</p>
              <p>{business.zipCode}</p>
            </div>
            <div className="Business-reviews">
              <h3>{business.category}</h3>
              <h3 className="rating">{business.rating}</h3>
              <p>{business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

// deja el componente listo para que cualquier otro componente lo pueda usar
export default Business;