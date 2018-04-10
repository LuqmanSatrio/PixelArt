// Select color input
// Select size input
const c = document.getElementById('pixelCanvas');
const color = document.getElementById('colorPicker');
const gridHeight = document.getElementById('inputHeight');
const gridWidth = document.getElementById('inputWidth');
const button = document.querySelector('#button');
// When size is submitted by the user, call makeGrid()

button.addEventListener('click',function(e) {
	e.preventDefault();
	makeGrid();
});

function makeGrid() {
c.innerHTML = '';

	height = gridHeight.value;
	width = gridWidth.value;
	 for (let i = 0; i < height; i++) {
        let row = c.insertRow(i);
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
          cell.addEventListener('click', function(){
            cell.style.backgroundColor = color.value;
        });
        }
    }


}
