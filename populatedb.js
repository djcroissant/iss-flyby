#! /usr/bin/env node

console.log('This script populates some test users, alerts, and locations to your database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var User = require('./server/models/User.js')
var Location = require('./server/models/Location.js')
var Alert = require('./server/models/Alert.js')


var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var users = []
var locations = []
var alerts = []

function userCreate(email, password, cb) {
  userdetail = {email:email, password:password}
  
  var user = new User(userdetail);
       
  user.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New User: ' + user);
    users.push(user)
    cb(null, user)
  }  );
}

function locationCreate(location, latitude, longitude, cb) {
  locationdetail = {location:location, latitude:latitude, longitude:longitude}  

  var location = new Location(locationdetail);
       
  location.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New Location: ' + location);
    locations.push(location)
    cb(null, location)
  }   );
}

function alertCreate(starttime, endtime, active, owner, location, cb) {
  alertdetail = { 
    startTime:starttime,
    endTime:endtime,
    active:active,
    owner:owner,
    location:location
  }
    
  var alert = new Alert(alertdetail);    
  alert.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Alert: ' + alert);
    alerts.push(alert)
    cb(null, alert)
  }  );
}

function createUsers(cb) {
    async.parallel([
        function(callback) {
          userCreate('patrick@gmail.com', 'Rothfuss', callback);
        },
        function(callback) {
          userCreate('ben@gmail.com', 'Bova', callback);
        },
        function(callback) {
          userCreate('isaac@gmail.com', 'Asimov', callback);
        },
        function(callback) {
          userCreate('bob@gmail.com', 'Billings', callback);
        },
        function(callback) {
          userCreate('jim@gmail.com', 'Jones', callback);
        }
        ],
        // optional callback
        cb);
}


function createLocations(cb) {
    async.parallel([
        function(callback) {
          locationCreate('Seattle, WA', 20.123, 170.321, callback);
        },
        function(callback) {
          locationCreate('Boston, MA', -20.123, -170.321, callback);
        },
        function(callback) {
          locationCreate('Koh Samui', 25.1523, 175.3521, callback);
        },
        function(callback) {
          locationCreate('Beijing', -25.1523, -175.3521, callback);
        },
        function(callback) {
          locationCreate('London', 50.12344, 10.32144, callback);
        },
        function(callback) {
          locationCreate('Alice Springs', -50.12344, -10.32144, callback);
        }
        ],
        // optional callback
        cb);
}

function createAlerts(cb) {
    async.parallel([
        function(callback) {
          alertCreate("10:00:00 PM", "12:00:00 PM", false, users[0], locations[0], callback)
        },
        function(callback) {
          alertCreate("08:00:00 PM", "01:00:00 PM", true, users[1], locations[1], callback)
        },
        function(callback) {
          alertCreate("10:00:00 PM", "11:00:00 AM", true, users[2], locations[2], callback)
        },
        function(callback) {
          alertCreate("09:00:00 PM", "02:00:00 AM", true, users[3], locations[3], callback)
        },
        function(callback) {
          alertCreate("11:00:00 PM", "03:00:00 PM", true, users[4], locations[4], callback)
        },
        function(callback) {
          alertCreate("12:00:00 PM", "04:00:00 PM", true, users[5], locations[5], callback)
        },
        function(callback) {
          alertCreate("01:00:00 PM", "11:00:00 PM", true, users[1], locations[6], callback)
        },
        function(callback) {
          alertCreate("10:00:00 PM", "11:00:00 PM", true, users[2], locations[1], callback)
        },
        function(callback) {
          alertCreate("10:00:00 PM", "11:00:00 PM", true, users[3], locations[2], callback)
        }
        ],
        // Optional callback
        cb);
}



async.series([
    createUsers,
    createLocations,
    createAlerts
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('USERS: ' + users);
        console.log('LOCATIONS: ' + locations);
        console.log('ALERTS: ' + alerts);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});




