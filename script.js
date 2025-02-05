var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        this.context.fillStyle = "red";  // Impostiamo il colore di sfondo della canvas
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);  // Riempie tutta la canvas con il colore rosso
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    draw: function(component) {
        this.context.fillStyle = component.color;  // Colore del quadrato
        this.context.fillRect(component.x, component.y, component.width, component.height);
    }
};

var redSquare = {
    width: 20,
    height: 20,
    x: 10,
    y: 120,
    color: "white"  // Il quadrato è bianco
};

function startGame() {
    myGameArea.start();
    myGameArea.draw(redSquare);  // Disegna il quadrato bianco
}

function updateGameArea() {
    myGameArea.context.clearRect(0, 0, myGameArea.canvas.width, myGameArea.canvas.height);
    myGameArea.context.fillStyle = "red";  // Riempi di rosso la canvas ogni volta che viene ridisegnata
    myGameArea.context.fillRect(0, 0, myGameArea.canvas.width, myGameArea.canvas.height);
    myGameArea.draw(redSquare);  // Ridisegna il quadrato bianco
}

function moveup() {
    redSquare.y -= 30;
}

function movedown() {
    redSquare.y += 30;
}

function moveleft() {
    redSquare.x -= 30;
}

function moveright() {
    redSquare.x += 30;
}
