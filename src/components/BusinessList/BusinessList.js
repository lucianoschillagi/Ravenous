/* BusinessList Component */
import React from 'react';
import './BusinessList.css';
// importa el componente 'Business'
import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return(
      // HMTL (JSX)
      <div className="BusinessList">
        {Business}
        {Business}
        {Business}
        {Business}
        {Business}
        {Business}
      </div>
    );
  }
}

export default BusinessList;



