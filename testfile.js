var getHTML = require('./http-functions');

function printHTML (html) {
  var fullHTML = "";
  fullHTML += html;
  console.log(fullHTML);
};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, printHTML)