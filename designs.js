// add var to hold id/color clicked/selected



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

//need function to get id= from square that click occurs in
//

//need function to change background-color for <div> with id num clicked
function addColor(id) {
document.getElementById(id).style.backgroundColor = 'color';
}


// When size is submitted by the user, call makeGrid()
//may need to add when DOM is ready code
document.addEventListener('submit', makeGrid () );



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
			tblData.innerHTML = "<div id='" + pixl + "'></div>";
		}

	}
	return gridBox;
}
