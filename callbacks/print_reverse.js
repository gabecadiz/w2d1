var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function HTMLReverse (html) {

  var fullHTML = "";
  fullHTML += html;
  var fullHTMLReverse = fullHTML.split("").reverse().join("");
  console.log(fullHTMLReverse);

};

getHTML(requestOptions, HTMLReverse);