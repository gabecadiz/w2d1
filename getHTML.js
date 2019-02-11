var https = require('https');

var fullHTML = "";

function getHTML (options, callback) {

https.get(options, function (response){

  response.on('data', callback);

  response.on('end', function(){
    console.log("Response stream completed");

  });
});
}

function printHTML (html) {
  fullHTML += html;
  console.log(fullHTML);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
