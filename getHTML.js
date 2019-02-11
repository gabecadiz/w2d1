var https = require('https');



function getHTML (options, callback) {
https.get(options, function (response){

  response.on('data', callback);

  response.on('end', function(){
    console.log("Response stream completed");

  });
});
}

function printHTML (html) {
  var fullHTML = "";
  fullHTML += html;
  console.log(fullHTML);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);
