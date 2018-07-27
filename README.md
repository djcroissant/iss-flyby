ISS Tracker
================

An open-source web application to track the location of the International Space Station (ISS). ISS Tracker will allow users to create alerts to notify them when the ISS is visible at their specified location.


APIs
-------

### Open Notify

Data about the international space station comes from my fork of [Open Notify](https://github.com/djcroissant/Open-Notify-API). Changes relative to original:

* Updated from Python v2.7 to v3.6
* Changed data source from NASA to Celestrak to simplify parsing
* Implemented Flask-Cors package to enable cross-origin resource sharing
* Deployed using https to allow integration with other https sites. Modern browsers will block a mixed content request (i.e. request to http from https).

### Google Maps
Google Maps API provides latitude/longitude data for locations entered by users. It also provides
a map showing the location.


Deployment
-----------
ISS Tracker is deployed on Heroku. Access information will be provided following completion of the MVP.