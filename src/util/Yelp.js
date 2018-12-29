/* Yelp API - Networking */

// api key
const apiKey = 'Ssaq3XDGkTE3OqPbfFl8WGpH79L2b4OxDqFz9aUMbzn6n51gCUL4YAlzLyTUBlikI2UduM0MoX9R1SGFF2y48mml5XLeATga1_lBzbVqsM1mtp39yvrjNDkGdLcSXHYx';

// This object will store the functionality needed to interact with the Yelp API.
const yelp = {
  // This is the method we'll use to retrieve search results from the Yelp API.
  searchYelp(term, location, sortBy) {
    // endpoint: https://api.yelp.com/v3/businesses/search?...
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { 
      headers: {
        Authorization: `Bearer ${apiKey}` 
      },
    }).then((response) => {
      // convierte la respuesta en un JSON
      return response.json();
    }).then((jsonResponse) => {
      // comprueba que la respuesta contenga la clave 'businesses'
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(((business) => {
          return {
            // extrae los datos deseados 👏
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            adress: business.location.adress1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_Code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }
        }));
      }
    })
  }
}

export default yelp;
