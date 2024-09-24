//add event listner to every pallete
const pallete = document.querySelectorAll(".colorPalette");
const canvas = document.getElementById("canvasColor");
const colorbox = document.createElement("div");
document.addEventListener("DOMContentLoaded", addGrid());

console.log(pallete);

let selectedColor = "#ff0000"; // Example selected color

pallete.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        selectedColor = item.id;
        console.log(item.id);
    });
});

function addGrid() {
    let counter = 0;
    let gridNumber = 256;
    while (counter < gridNumber) {
        const colorbox = document.createElement("div");
        colorbox.classList.add("gridCell");
        canvas.appendChild(colorbox);
        counter++;  // Increment the counter to avoid infinite loop
    }
}

const gridCellGroup = document.querySelectorAll(".gridCell")

gridCellGroup.forEach((gridItem)=>{
    gridItem.addEventListener("mouseover",(e)=>{
        gridItem.style.backgroundColor = selectedColor;  // Apply the selected color

    });
})

// Correct event listener for when the document is fully loaded
