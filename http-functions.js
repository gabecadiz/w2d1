var https = require('https');

module.exports = function getHTML (options, callback) {
    https.get(options, function (response){

      response.on('data', callback);

      response.on('end', function(){
        console.log("Response stream completed");

     });
  });
};

