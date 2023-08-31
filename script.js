window.onload = function() {
    const container = document.getElementById("container");
    const grid = document.createElement('div');
    grid.classList.add('box');
    console.log(grid);
    console.log(container);
    container.append(grid);
    
    for (let i = 0; i < 255; i++) {
        container.appendChild(grid.cloneNode(true))
    };
    
    getBoxes();
}

function getBoxes() {
    const grids = document.querySelectorAll(".box");
    for (let i = 0; i < grids.length; i++) {
        let item = grids[i];
        item.classList.add(i);
        item.classList.add("tiny")
        grids[i].onmouseover = function(){
            grids[i].classList.add("hover");
            };
        };
    const reset = document.getElementById("btn")
    reset.onclick = function (){
        for (let i = 0; i < grids.length; i++) {
            grids[i].classList.remove("hover");
            };
            const container = document.getElementById("container");
            console.log(container);
            for (let i = 0; i < grids.length; i++){
                container.removeChild(container.lastChild)
            };
            const grid = document.createElement('div');
            grid.classList.add('box');
            grid.classList.add("tiny")
            container.append(grid);
            for (let i = 0; i < 255; i++) {
                container.appendChild(grid.cloneNode(true))
        
            };
            getBoxes();
        };
    const small = document.getElementById("32");
    const medium = document.getElementById("64");
    const large = document.getElementById("100");
   
    small.onclick = function (){
        const container = document.getElementById("container");
        console.log(container);
        for (let i = 0; i < grids.length; i++){
            container.removeChild(container.lastChild)
        };
        const grid = document.createElement('div');
        grid.classList.add('box');
        grid.classList.add("small")
        container.append(grid);
        for (let i = 0; i < 1023; i++) {
            container.appendChild(grid.cloneNode(true))
        
        };
        getBoxes();
    };
    medium.onclick = function (){
        const container = document.getElementById("container");
        console.log(container);
        for (let i = 0; i < grids.length; i++){
            container.removeChild(container.lastChild)
        };
        const grid = document.createElement('div');
        grid.classList.add('box');
        grid.classList.add("medium")
        container.append(grid);
        for (let i = 0; i < 4095; i++) {
            container.appendChild(grid.cloneNode(true))
        
        };
        getBoxes();
    };
};
    












