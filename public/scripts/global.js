/*
  constants and global functions
*/
var dom = {
    inputSearch: $('#inputSearch'),
    btnSearch: $('#btnSearch'),
    btnSaveSearch: $('#btnSaveSearch'),
    eBooks: $('.books').find('div.e-book'),
    savedSearch: $('.savedSearch')
}

var JSON_FILE = 'books-schema.json';
var awesomplete = new Awesomplete(inputSearch, {minChars: 3});
var num_pagina = 1;

/*
 @method loadJSON
 source: https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
*/
var loadJSON = function(url, callback){
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", url, true);
    xobj.onreadystatechange = function(responseText){
        if(xobj.readyState == 4 && xobj.status == "200"){
            var content = JSON.parse(xobj.responseText);
            callback.call(this, content);
        }
    };
    xobj.send();
};
