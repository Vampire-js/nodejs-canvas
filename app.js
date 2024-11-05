

let graphics = '';
let side = 80;
let index = 0;


function initGraphics() {
    graphics = '';
    for (let i = 0; i < side * side; i++) {
        index += 1;
        graphics += '. ';
        if (index === side) {
            graphics += '\n';
            index = 0;
        }
    }
}

initGraphics();

function drawPoint(x, y) {
    const red = '\\x1b[31m';
    const green = '\\x1b[32m';
    const reset = '\\x1b[0m';

    let index = side * y + x;
    let arr = graphics.split(' ');
    arr[index] = "O";
    graphics = arr.join(' ');
}

function drawLine(x1, y1, x2, y2) {
    let m = (y2 - y1) / (x2 - x1);
    let c = y1 - m * x1;

    for (let i = x1; i <= x2; i++) {
        let y = m * i + c;
        drawPoint(i, Math.round(y));
    }
}

function clearScreen() {
    graphics = '';
    for (let i = 0; i < side * side; i++) {
        index += 1;
        graphics += ". ";
        if (index === side) {
            graphics += "\n";
            index = 0;
        }
    }
}

let i = 0;
setInterval(() => {
    if(i < 80){
    drawPoint(i, 10+Math.round(2*Math.tan(i*3)));  
    console.log(graphics);
    i = (i + 1) % side;   
    }
}, 100);
