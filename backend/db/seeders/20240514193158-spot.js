
const { Spot } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

      await Spot.bulkCreate([
        {
          "ownerId": 1,
          "address": "123 Disney Lane",
          "city": "San Francisco",
          "state": "California",
          "country": "United States of America",
          "lat": 37.7645358,
          "lng": -122.4730327,
          "name": "App Academy",
          "description": "Place where web developers are created",
          "price": 123,
          "avgRating": 4.5,
          "previewImage": "image url"
        },
        { ownerId: 2, address: "742 Evergreen Terrace", city: "Springfield", state: "Oregon", country: "United States of America", lat: 44.051926, lng: -123.086753, name: "The Simpsons House", description: "Iconic home with a vibrant pink exterior, perfect for family getaways.", price: 199, previewImage: "image url" },
      { ownerId: 3, address: "221B Baker Street", city: "London", state: "England", country: "United Kingdom", lat: 51.523772, lng: -0.158539, name: "Sherlock's Flat", description: "Step into the world of mystery in this historic detective's abode.", price: 250, previewImage: "image url" },
      { ownerId: 1, address: "4 Privet Drive", city: "Little Whinging", state: "Surrey", country: "United Kingdom", lat: 51.37751, lng: -0.17599, name: "Harry's Cupboard Under the Stairs", description: "Cozy, magical retreat under the stairs, perfect for solo travelers.", price: 50, previewImage: "image url" },
      { ownerId: 2, address: "15 Yemen Road", city: "Yemen", state: "", country: "Yemen", lat: 15.369445, lng: 44.205986, name: "Hobbit Hole", description: "Charming, earth-sheltered dwelling with round doors and a cozy interior.", price: 100, previewImage: "image url" },
      { ownerId: 3, address: "12 Grimmauld Place", city: "London", state: "England", country: "United Kingdom", lat: 51.51276, lng: -0.12738, name: "Order of the Phoenix Headquarters", description: "Historic townhouse with secret rooms and a rich history.", price: 300, previewImage: "image url" },
      { ownerId: 1, address: "Bag End", city: "Hobbiton", state: "The Shire", country: "Middle-earth", lat: -37.87169, lng: 175.68461, name: "Bilbo's Smial", description: "Peaceful hobbit hole with a garden and a view of the Green Dragon Inn.", price: 150, previewImage: "image url" },
      { ownerId: 2, address: "The Burrow", city: "Ottery St Catchpole", state: "Devon", country: "United Kingdom", lat: 50.73065, lng: -3.28251, name: "The Weasley's Whimsical Home", description: "Quirky, magical house with a leaning tower and a garden full of gnomes.", price: 220, previewImage: "image url" },
      { ownerId: 3, address: "1313 Mockingbird Lane", city: "Mockingbird Heights", state: "California", country: "United States of America", lat: 34.1030032, lng: -118.3398244, name: "The Munster Mansion", description: "Spooky, gothic mansion with cobwebs and a friendly monster family.", price: 350, previewImage: "image url" },
      { ownerId: 1, address: "94 Evergreen Terrace", city: "Springfield", state: "Oregon", country: "United States of America", lat: 44.051926, lng: -123.086753, name: "The Flanders Family Home", description: "Quaint, well-maintained home with a white picket fence and a welcoming atmosphere.", price: 175, previewImage: "image url" },
      { ownerId: 2, address: "42 Wallaby Way", city: "Sydney", state: "New South Wales", country: "Australia", lat: -33.8567844, lng: 151.2152967, name: "Finding Nemo's House", description: "Underwater adventure awaits in this coral reef dwelling.", price: 400, previewImage: "image url" },
      { ownerId: 3, address: "10 Downing Street", city: "London", state: "England", country: "United Kingdom", lat: 51.503397, lng: -0.12764, name: "Prime Minister's Residence", description: "Experience history and power in the heart of British politics.", price: 500, previewImage: "image url" },
      { ownerId: 1, address: "32 Windsor Gardens", city: "London", state: "England", country: "United Kingdom", lat: 51.51543, lng: -0.14189, name: "Paddington's House", description: "Charming London townhouse with a friendly bear and marmalade sandwiches.", price: 180, previewImage: "image url" },
      { ownerId: 2, address: "The Island", city: "Lost", state: "", country: "Pacific Ocean", lat: 20.51695, lng: -165.05195, name: "The Dharma Initiative Station", description: "Remote research station with mysterious hatches and a unique history.", price: 280, previewImage: "image url" },
      { ownerId: 3, address: "1600 Pennsylvania Avenue NW", city: "Washington D.C.", state: "", country: "United States of America", lat: 38.8977, lng: -77.0365, name: "The White House", description: "Historic residence and symbol of American leadership.", price: 1000, previewImage: "image url" }
      ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete(Spot,null,{})
  }
};
