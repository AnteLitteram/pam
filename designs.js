let clickOn = "";
// Select size input
// get width  from url
function getSize () {
	const params = new URLSearchParams(document.location.search.substring(1));
	const width = params.get("width");
	const height = params.get("height");

	return [width, height];
};


// Select color input
//function to change background-color for <td> with id num clicked
function addColor() {
	let clickOn = event.srcElement.getAttribute("id");
	                 // if statement to prevent whole grid color change when click and drag
	if (!isNaN(clickOn)) {   
            let sqr = document.getElementById(clickOn);
	                 //  get color value from html color picker
            sqr.style.backgroundColor = document.getElementById("colorPicker").value;
  }
}

// When size is submitted by the user, call makeGrid()
//may need to add when DOM is ready code
document.addEventListener('submit', makeGrid ()); 


//function to make the grid on #pixelCanvas
function makeGrid() {
	const size  = getSize();	//call getSize and select from returned array width and height
	const wide = size[0];
	const high = size[1];
	let pixl = 0;
	const gridBox = document.querySelector("#pixelCanvas");
	for (let row = 0; row < high; row++) {
		const tblRow = gridBox.appendChild(document.createElement('tr'));
		for (let col = 0; col < wide; col++) {
			const tblData = tblRow.appendChild(document.createElement('td'));
			pixl = ++pixl;			  //pixel designation for each square
                        tblData.setAttribute("id", pixl); //number the <td> id for reference
		}
	}
	gridBox.addEventListener('click', function (event) {
	addColor();  
        });


}
