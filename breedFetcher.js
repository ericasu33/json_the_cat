const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error);
    } else {
      const catObj = JSON.parse(body);
      if (catObj.length > 0) {
        const description = catObj[0].description;

        callback(null, description);
      } else {
        callback(null, undefined);
      }
    }
  });
};

module.exports = { fetchBreedDescription };

// } else {
//   if (!catObj[0].description) {
//     console.log('Unfortunately we don\'t have a description created yet for this breed.');