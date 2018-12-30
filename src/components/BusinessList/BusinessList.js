/* Business List Component */
import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

// Abstract: representa un listado de negocios (el resultado de la búsqueda).
class BusinessList extends React.Component {
  render() {
    return(
      // HMTL (JSX)
      <div className="BusinessList">
        {
          this.props.businesses.map(business => {
            return <Business key={business.id} business={business} />
          })
        }
      </div>
    );
  }
}

export default BusinessList;



