/* Business Component */
import React from 'react';
import './Business.css';

// Abstract: representa un negocio (puede ser un restaurant, bar, etc)
class Business extends React.Component {
  render() {
    return (
      // inyect HTML (JSX)
      <div className="Business">
          <div className="image-container">
            <img src={this.props.business.imageSrc} alt=''/>
          </div>
          <h2>{this.props.business.name}</h2>
          <div className="Business-information">
            <div className="Business-address">
              <p>{this.props.business.address}</p>
              <p>{this.props.business.city}</p>
              <p>{`${this.props.business.state} ${this.props.business.zipCode}`}</p>
            </div>
            <div className="Business-reviews">
              <h3>{this.props.business.category.toUpperCase()}</h3>
              <h3 className="rating">{`${this.props.business.rating} stars`}</h3>
              <p>{`${this.props.business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}

// deja el componente listo para que cualquier otro componente lo pueda usar
export default Business;