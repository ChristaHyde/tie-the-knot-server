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

  // // Delete an example by id
  // app.delete("/api/examples/:id", function (req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
