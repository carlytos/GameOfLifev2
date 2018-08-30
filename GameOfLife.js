/*Esta funcion me da todos los vecinos de una celda en concreto, ordenados de izquierda a derecha*/
let tablero = [
    [false, true, false, false],
    [false, true, false, false],
    [false, true, false, false]
];


function Neighbours(tablero, x, y) {

    let vecinos = [];
    //console.log(tablero);
    //Caso 00
    if (x == 0 && y == 0) {
        vecinos.push(tablero[x][y]);
        vecinos.push(tablero[x][y + 1]);
        vecinos.push(tablero[x + 1][y]);
        vecinos.push(tablero[x + 1][y + 1]);
    }
    //Caso 01
    if (x == 0 && y > 0 && y < tablero.length - 1) {
        vecinos.push(tablero[x][y - 1]);
        vecinos.push(tablero[x][y]);
        vecinos.push(tablero[x][y + 1]);
        vecinos.push(tablero[x + 1][y - 1]);
        vecinos.push(tablero[x + 1][y]);
        vecinos.push(tablero[x + 1][y + 1]);
    }
    //Case 02
    if (x == 0 && y == tablero.length - 1) {
        vecinos.push(tablero[x][y - 1]);
        vecinos.push(tablero[x][y]);
        vecinos.push(tablero[x + 1][y - 1]);
        vecinos.push(tablero[x + 1][y]);
    }
    //Caso 10
    if (x > 0 && x < tablero.length - 1 && y == 0) {
        vecinos.push(tablero[x - 1][y]);
        vecinos.push(tablero[x - 1][y + 1]);
        vecinos.push(tablero[x][y]);
        vecinos.push(tablero[x][y + 1]);
        vecinos.push(tablero[x + 1][y]);
        vecinos.push(tablero[x + 1][y + 1]);
    }
    //Caso 11 -> Caso ideal 
    if (x > 0 && x < tablero.length - 1 && y > 0 && y < tablero.length - 1) {
        vecinos.push(tablero[x - 1][y - 1]);
        vecinos.push(tablero[x - 1][y]);
        vecinos.push(tablero[x - 1][y + 1]);
        vecinos.push(tablero[x][y - 1]);
        vecinos.push(tablero[x][y]);
        vecinos.push(tablero[x][y + 1]);
        vecinos.push(tablero[x + 1][y - 1]);
        vecinos.push(tablero[x + 1][y]);
        vecinos.push(tablero[x + 1][y + 1]);
    }
    //Caso 12 
    if (x > 0 && x < tablero.length - 1 && y == tablero.length - 1) {
        vecinos.push(tablero[x - 1][y - 1]);
        vecinos.push(tablero[x - 1][y]);
        vecinos.push(tablero[x][y - 1]);
        vecinos.push(tablero[x][y]);
        vecinos.push(tablero[x + 1][y - 1]);
        vecinos.push(tablero[x + 1][y]);
    }
    //Caso 20
    if (x == tablero.length - 1 && y == 0) {
        vecinos.push(tablero[x - 1][y]);
        vecinos.push(tablero[x - 1][y + 1]);
        vecinos.push(tablero[x][y]);
        vecinos.push(tablero[x][y + 1]);
    }
    //Caso 21
    if (x == tablero.length - 1 && y > 0 && y < tablero.length - 1) {
        vecinos.push(tablero[x - 1][y - 1]);
        vecinos.push(tablero[x - 1][y]);
        vecinos.push(tablero[x - 1][y + 1]);
        vecinos.push(tablero[x][y - 1]);
        vecinos.push(tablero[x][y]);
        vecinos.push(tablero[x][y + 1]);
    }
    //Caso 22
    if (x == tablero.length - 1 && y == tablero.length - 1) {
        vecinos.push(tablero[x - 1][y - 1]);
        vecinos.push(tablero[x - 1][y]);
        vecinos.push(tablero[x][y - 1]);
        vecinos.push(tablero[x][y]);
    }

    return vecinos;

}

function StateNextGeneration(tablero, a, b) {
    let liveNeighbours = 0;
    let state = false;
    const vecinos = Neighbours(tablero, a, b);
    vecinos.forEach(function(celda) {
        if (celda == true) {
            liveNeighbours++;
        }
    });
    let RealliveNeighbours = liveNeighbours;

    if (tablero[a][b] == true) {
        RealliveNeighbours--;
        if (RealliveNeighbours == 2 || RealliveNeighbours == 3) {
            state = true;
        }
    }

    if (RealliveNeighbours == 3) {
        state = true;
    }
    return state;
}

function GameOfLife(tablero) {
    let finalTablero = [
        [],
        [],
        []
    ];

    for (let x = 0; x < tablero.length; x++) {
        for (let y = 0; y <= tablero.length; y++) {
            finalTablero[x][y] = StateNextGeneration(tablero, x, y);
        }
    }
    return finalTablero;

}


module.exports = { Neighbours, StateNextGeneration };