const count = 16;
const boxContainer = document.querySelector(".box-container")



for(let i=1; i<=count; i++) {
    for(let i=1; i<=count; i++) {
        const box = document.createElement("div");
        box.style.width = `calc(100% / ${count})`;
        box.style.height = `calc(100% / ${count})`;
        box.setAttribute("class", "box")
        boxContainer.appendChild(box)

    }
}

// function for genarating a random RGBA color
function getRandomRGBA() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // Generate a random value for alpha (0-1) with two decimal places
    const a = (Math.random()).toFixed(2);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

//Buttons variables
const rainbowBtn = document.getElementById("js-rainbow-btn");
const borderBtn = document.getElementById("js-border-btn");
const sizeBtn = document.getElementById("js-size-btn");
const clearBtn = document.getElementById("js-clear-btn");

let rainbowFunc; // place holder for the eventListner of ".box-container"

// eventListner for rainbow colour
rainbowBtn.addEventListener("click", function(e){
    rainbowBtn.classList.toggle("clicked");
    if(rainbowBtn.classList.contains("clicked")) {
        document.querySelector(".box-container").addEventListener("mouseover", rainbowFunc = function(e) {
            if(e.target.matches(".box")){
                e.target.style.backgroundColor = getRandomRGBA();
            }
        })
    }else {
        document.querySelector(".box-container").removeEventListener("mouseover", rainbowFunc);
    }
})

// eventListner for toggle border
borderBtn.addEventListener("click", function(){
    borderBtn.classList.toggle("clicked");
    let boxes = document.querySelectorAll(".box");
    if(borderBtn.classList.contains("clicked")) {
        boxes.forEach(function(box){
            box.style.border = "1px solid black";
        })
    }else {
        boxes.forEach(function(box){
            box.style.border = "none";
        })
    }
})