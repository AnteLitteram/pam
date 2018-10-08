// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()




function makeGrid(wide, high) {
	//for testing using 30 and 30 delete when I can get width height from submit
	wide = 30;	//delete
	high = 30;	//delete
	color = "red";	//delete
	var num = 0;
	gridBox = document.querySelector("#pixelCanvas");
	for (var row = 0; row < wide; row++) {
		var tr = gridBox.appendChild(document.createElement('tr'));
		for (var clms = 0; clms < high; clms++) {
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
