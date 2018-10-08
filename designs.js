// Select color input

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




function makeGrid(wide, high) {
	//for testing using 30 and 30 delete when I can get width height from submit
	var wide = getWidth();	//delete
	var high = getHeight();	//delete
	var color = "red";	//delete
	var num = 0;
	gridBox = document.querySelector("#pixelCanvas");
	for (var row = 0; row < high; row++) {
		var tr = gridBox.appendChild(document.createElement('tr'));
		for (var clms = 0; clms < wide; clms++) {
			var pixl = tr.appendChild(document.createElement('td'));
//         			pixl.addEventListener('click', addColor(color)); 
//				pixl.style.("background-color", "red");
//				}));
		
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
