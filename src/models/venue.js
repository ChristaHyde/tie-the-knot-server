const mongoose = require('mongoose')

const venueSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  lat: {
    type: String
  },
  lng: {
    type: String
  },
  description: {
    type: String
  }
});

const Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue