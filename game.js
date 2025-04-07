function changePage(page) {
    if (!window.location.pathname.includes(page)) {
      window.location.href = page;
    } else {
      showMenu(false);
    }
}

let menu = document.getElementById("menu");
let main = document.getElementById("main");

function showMenu(show) {
    if (show) {
      menu.style.left = 0;
      if(window.innerWidth >= 800){
        main.style.marginLeft = "300px";
      }
    } else {
      menu.style.left = "-800px";
      main.style.marginLeft = 0;
    }
  
    setTimeout(() => {
      window.scrollTo(0, window.scrollY);
    }, 0);
}

function mouseHover (event){
    if(event.clientX < 30){
      showMenu(true);
    }
}

function toggleMenu(){
  menu.style.left == "0px" ? showMenu(false) : showMenu(true);
}

//init
const rows = 7;
const columns = 15;

let container = document.getElementById("game");

container.style.minWidth = (container.offsetHeight * (rows/columns)) + "px";

for (let col = 0; col < columns; col++){
    const column = document.createElement("div");
    column.classList.add("column");
    
    for (let row = 0; row < rows; row++){
        const box = document.createElement("div");
        box.classList.add("box");
        box.id = "box_" + row + "," + col;
        column.appendChild(box);
    }

    container.appendChild(column);
}

//game
let moveBar;
let previousBar = [];
const currentBar = [];
let currentRow = 0;
let currentColumn = columns - 1;
let interval = 300;
let length = 3;
const button = document.getElementById("gameBtn");

button.addEventListener("click", () => {
    if (button.innerHTML === "Start"){
        button.innerHTML = "Drop"
        begin();
    } else if (button.innerHTML === "Drop") {
        if(checkBar()){
            button.disabled = true;
            clearInterval(moveBar);
            
            currentColumn--;
            interval -= 17;
    
            if(currentColumn > 10){
                length = 3;
            } else if (currentColumn > 5) {
                length = 2;
            } else {
                length = 1;
            }
            begin();
            
            setTimeout(() => {
                button.disabled = false;
            }, interval);
        }
    } else if (button.innerHTML === "Try Again") {
        button.innerHTML = "Drop"
    }
});


function begin(){
    let direction = "right";

    moveBar = setInterval(() => {
        currentBar.length = 0;
        for (let row = 0; row < rows; row++){
            document.getElementById(`box_${row},${currentColumn}`).style.backgroundColor 
                = "rgb(245, 245, 245)";
        }

        for (let count = 0; count < length; count++){
            let row = currentRow + count;
            document.getElementById(`box_${row},${currentColumn}`).style.backgroundColor 
                = "rgb(17, 17, 17)";
            currentBar.push(row);
        }
            
        if (currentRow === 0) {
            direction = "right";
        } else if (currentRow + length === rows) {
            direction = "left";
        }
            
        direction === "right" ? currentRow++ : currentRow--;
            
    }, interval);
}

function checkBar(){
    for(let count = 0; count < currentBar.length; count++){
        
    }
    
    previousBar = [...currentBar];
    return true;
}