var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {

  var fullHTML = "";
  fullHTML += html;
  var fullHTMLLowerCase = fullHTML.toLowerCase();
  console.log(fullHTMLLowerCase)

}

getHTML(requestOptions, printLowerCase);