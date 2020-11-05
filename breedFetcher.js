const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  if (error) {
    console.log('There is an error. Please check the message: ', error);
  } else {
    const catObj = JSON.parse(body);
    if (catObj.length === 0) {
      console.log('This is not a valid cat breed. Please search again.');
    } else {
    
      if (!catObj[0].description) {
        console.log('Unfortunately we don\'t have a description created yet for this breed.');
      } else {
        console.log(catObj[0].description);
      }
    }
  }

});