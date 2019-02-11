var https = require('https');

function getAndPrintHTML (options) {

var fullData = ""

https.get(options, function (response){

  response.on('data', function(data){
    fullData += data;
    console.log(fullData)
  });

  response.on('end', function(){
    console.log("Response stream completed");

  });
});



}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);