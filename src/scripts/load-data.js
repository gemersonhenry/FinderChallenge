/**
* Aquí se utilizarán los elementos del DOM:
* inputSearch, 
*/
function loadData () {
	
	new Awesomplete(inputSearch, {
		minChars: 3,
		list: ["Adita", "Java", "JavaScript", "Brainfuck", "LOLCODE", "Node.js", "Ruby on Rails"]
	});

	loadJSON(function (response) {
		console.log(response);
	})
}