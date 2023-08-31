

window.onload = function() {
    const container = document.getElementById("container");
    const grid = document.createElement('div');
    grid.classList.add('box');
    console.log(grid);
    console.log(container);
    container.append(grid);
    for (var i = 0; i < 255; i++) {
        container.appendChild(grid.cloneNode(true))
    }
    
    getBoxes();
}

function getBoxes() {
    const grids = document.querySelectorAll(".box");
    console.log(grids)
    for (let i = 0; i < grids.length; i++) {
        let item = grids[i];
        item.classList.add(i);
        grids[i].onmouseover = function(){
            grids[i].classList.add("hover");
        };
    }
    const reset = document.getElementById("btn")
    reset.onclick = function (){
        for (let i = 0; i < grids.length; i++) {
            grids[i].classList.remove("hover");
        };
}
    
};











