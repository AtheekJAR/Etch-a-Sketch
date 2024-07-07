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