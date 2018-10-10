// add var to hold id/color clicked/selected
//let clickId = "50";	//test with static 50 DELETE
//let color = "red";	//test with red DELETE

// Select color input
// get value from #colorPicker
function getColor () {
     let hue = document.getElementById("colorPicker").value;
}



// Select size input
// get width  from url
function getWidth () {
	var params = new URLSearchParams(document.location.search.substring(1));
	var width = params.get("width");

	return width;
};

//get height from url
function getHeight () {
	var params = new URLSearchParams(document.location.search.substring(1));
	var height = params.get("height");
	return height;
}

//need function to get id= from square that click occurs in
//



//need function to change background-color for <div> with id num clicked
function addColor() {
	sqr = document.getElementById(50);
//        sqr.style.backgroundColor = "red";
        sqr.setAttribute("class", "useMe");
}


// When size is submitted by the user, call makeGrid()
//may need to add when DOM is ready code
document.addEventListener('submit', makeGrid () );
document.addEventListener('click', function (event) {
	console.log(event);
});



//function to make the grid on #pixelCanvas
function makeGrid(wide, high) {
	var wide = getWidth();	//delete
	var high = getHeight();	//delete
	var pixl = 0;
	const gridBox = document.querySelector("#pixelCanvas");
	for (let row = 0; row < high; row++) {
		const tblRow = gridBox.appendChild(document.createElement('tr'));
		for (let c = 0; c < wide; c++) {
			const tblData = tblRow.appendChild(document.createElement('td'));
			pixl = ++pixl;
                        tblData.setAttribute("id", pixl);
		}

	}
	return gridBox;

}
