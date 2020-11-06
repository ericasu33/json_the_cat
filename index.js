const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error Details:", error);
  } else if (desc === undefined) {
    console.log(`No Information for ${breedName} is found.`);
  } else {
    console.log(desc);
  }
});

