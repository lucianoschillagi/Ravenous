/* Yelp API - Networking */

// api key
const apiKey = 'Ssaq3XDGkTE3OqPbfFl8WGpH79L2b4OxDqFz9aUMbzn6n51gCUL4YAlzLyTUBlikI2UduM0MoX9R1SGFF2y48mml5XLeATga1_lBzbVqsM1mtp39yvrjNDkGdLcSXHYx';

// This object will store the functionality needed to interact with the Yelp API.
const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;
