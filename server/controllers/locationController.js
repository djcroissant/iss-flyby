const axios = require('axios');

const Location = require('./../models/Location.js');

// Handle form to edit an location on POST
exports.location_edit_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Location edit POST: ' + req.params.id);
};

// Handle form to create an location on POST
exports.location_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Location create POST');
};

// Handle delete location on POST
exports.location_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Location delete POST: ' + req.params.id);
};

// Handle Google Maps API query
exports.location_api_query = (req, res) => {
  let url = "https://maps.googleapis.com/maps/api/geocode/json?address=";
  url = url + req.params.location_query;
  url = url + "&key=" + process.env.GOOGLE_MAPS_KEY;

  const request = axios.get(url);
  request.then(response => {
    let latitude = response.data.results[0].geometry.location.lat
    let longitude = response.data.results[0].geometry.location.lng
    res.send({'latitude': latitude, 'longitude': longitude})
  }).catch((err) => {
    console.log(err)
  })

};