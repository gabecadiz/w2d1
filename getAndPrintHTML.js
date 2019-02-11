var https = require('https');

function getAndPrintHTML () {

var fullData = ""
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

https.get(requestOptions, function (response){

  response.on('data', function(data){
    fullData += data;
    console.log(fullData)
  });

  response.on('end', function(){
    console.log("Response stream completed");

  });
});



}

getAndPrintHTML();