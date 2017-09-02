// Select color input
const colorPicker = document.getElementById("colorPicker");

// Select size input
const height = document.getElementById("input_height");
const width = document.getElementById("input_width");
const table = document.getElementById("pixel_canvas");

// When size is submitted by the user, call makeGrid()
const submit = document.querySelector("input[type='submit']").addEventListener("click", makeGrid);

function makeGrid() {
    event.preventDefault();

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    for (let i = 0; i < height.value; i++) {
        let row = document.createElement("tr");

        function colorClick(e) {
            e.target.style.backgroundColor = colorPicker.value;
        }
        row.addEventListener("click", colorClick);
        for (let j = 0; j < width.value; j++) {
            let cell = document.createElement("td");
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}