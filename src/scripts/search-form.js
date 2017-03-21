function searchForm(){
    // code here

    dom.btnSearch.on('click', function (e){
    	e.preventDefault();
    	//console.log('click');
    })
    dom.inputSearch.on('keyup', function (e){
    	//console.log(e);
    })
    dom.btnSaveSearch.on('click', function (e){
    	e.preventDefault();
    	//console.log(e.target);
    })
}
