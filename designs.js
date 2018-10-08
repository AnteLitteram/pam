// Select color input
// get value from #colorPicker

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


// When size is submitted by the user, call makeGrid()



//function to make the grid on #pixelCanvas
function makeGrid(wide, high) {
	var wide = getWidth();	//delete
	var high = getHeight();	//delete
	var color = "red";	//delete
	var num = 0;
	var gridBox = document.querySelector("#pixelCanvas");
	for (let row = 0; row < high; row++) {
		const tblRow = gridBox.appendChild(document.createElement('tr'));
		for (let c = 0; c < wide; c++) {
			const tblData = tblRow.appendChild(document.createElement('td'));
		}

	}
	return gridBox;
}

//function to add color when click event
//move to inline unnamed funciont
//function addColor(color) {
//	pixl.style.("background-color=" + color);
//}	

// call makeGrid for testing delete when using submit to call
makeGrid();
