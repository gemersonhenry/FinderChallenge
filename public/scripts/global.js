/*
  constants and global functions
*/
var dom = {
    inputSearch: $('#inputSearch'),
    btnSearch: $('#btnSearch'),
    saveSearch: $('#saveSearch')
}

var JSON_FILE = 'http://localhost:8089/books_schema.json';

/*
 @method loadJSON
 source: https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
*/
var loadJSON = function(callback){
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", JSON_FILE, true);
    xobj.onreadystatechange = function(responseText){
        if(xobj.readyState == 4 && xobj.status == "200"){
            var content = JSON.parse(xobj.responseText);
            callback.call(content);
        }
    };
    xobj.send();
};
