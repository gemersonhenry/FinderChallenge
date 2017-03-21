/**
* Aquí se utilizarán los elementos del DOM (Ubicados en el archivo global.js):
* inputSearch, 
*/
function loadData () {

	var books = dom.eBooks;
	var uls = dom.savedSearch;
	var j = 0 + (num_pagina-1)*6;

	loadJSON(JSON_FILE, function (response) {
		console.log(response);
		var data_books = response.data;
		for (var i = 0; i < books.length; i++) {
			var book = $(books[i]);
			book.find('img').attr('src', data_books[i+j]['image']);
			book.find('h4').text(data_books[i+j]['title']);
			book.find('p').text(data_books[i+j]['teaser']);
		}

		var titles = data_books.map(function (book){
			return book.title;
		})
		awesomplete.list = titles;
		
		console.log(uls.find('ul'));
	})
}