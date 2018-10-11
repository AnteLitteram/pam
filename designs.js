// add var to hold id/color clicked/selected
let clickOn = "";


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
function getIdValue (event) {
	clickOn = event.srcElement.getAttribute("id");
	console.log(clickOn);
}



// Select color input
//need function to change background-color for <div> with id num clicked
function addColor(clickOn) {
	sqr = document.getElementById(clickOn);
//       need if statement to confirm id is num so drag not color whole grid 
	//  get value from html color picker
        sqr.style.backgroundColor = document.getElementById("colorPicker").value;
}


// When size is submitted by the user, call makeGrid()
//may need to add when DOM is ready code
document.addEventListener('submit', makeGrid ());  //add getColor function
document.addEventListener('submit', getColor ());  //add getColor function


//function to make the grid on #pixelCanvas
function makeGrid(wide, high) {
	var wide = getWidth();
	var high = getHeight();
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
	gridBox.addEventListener('click', function (event) {
	console.log(event);
	getIdValue(event);
	addColor(clickOn);  
        });

	return gridBox;

}
