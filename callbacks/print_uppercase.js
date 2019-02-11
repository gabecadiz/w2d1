var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

  var fullHTML = "";
  fullHTML += html;
  var fullHTMLUpperCase = fullHTML.toUpperCase();
  console.log(fullHTMLUpperCase)

}

getHTML(requestOptions, printUpperCase);