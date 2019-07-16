var Venue = require("../models/venue");

module.exports = function (app) {
  // [HTTP METHOD] endpoint | what it does
  // [GET] /api.venues | Get all venues
  app.get("/api/venues", function (req, res) {
    Venue.find({}).then(function (venues) {
      res.json(venues);
    });
  });

  // Create a new venue
  app.post("/api/venues", function (req, res) {
    Venue.create(req.body).then(function (venue) {
      res.json(venue);
    });
  });

  // Delete an example by id
  app.delete("/api/venues/:id", function (req, res) {
    console.log('id', req.params.id)
    Venue.deleteOne({ where: { id: ObjectId(req.params.id) } }).then(function (venue) {
      res.json(venue);
    });
  });
};
