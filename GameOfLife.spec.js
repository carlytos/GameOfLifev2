const Neighbours = require('./GameOfLife.js').Neighbours;
const StateNextGeneration = require('./GameOfLife.js').StateNextGeneration;
const tablero = [
    [0, 1, 2],
    [10, 11, 12],
    [20, 21, 22]
];

const tableroBoolean = [
    [false, true, false],
    [false, true, false],
    [false, true, false]
];

describe("GameOfLife", () => {
    it("Should give the neighbours from position 00", () => {
        expect(Neighbours(tablero, 0, 0)).toEqual([0, 1, 10, 11]);
    });
    it("Should give the neighbours from position 01", () => {
        expect(Neighbours(tablero, 0, 1)).toEqual([0, 1, 2, 10, 11, 12]);
    });
    it("Should give the neighbours from position 02", () => {
        expect(Neighbours(tablero, 0, 2)).toEqual([1, 2, 11, 12]);
    });
    it("Should give the neighbours from position 10", () => {
        expect(Neighbours(tablero, 1, 0)).toEqual([0, 1, 10, 11, 20, 21]);
    });
    it("Should give the neighbours from position 11", () => {
        expect(Neighbours(tablero, 1, 1)).toEqual([0, 1, 2, 10, 11, 12, 20, 21, 22]);
    });
    it("Should give the neighbours from position 12", () => {
        expect(Neighbours(tablero, 1, 2)).toEqual([1, 2, 11, 12, 21, 22]);
    });
    it("Should give the neighbours from position 20", () => {
        expect(Neighbours(tablero, 2, 0)).toEqual([10, 11, 20, 21]);
    });
    it("Should give the neighbours from position 21", () => {
        expect(Neighbours(tablero, 2, 1)).toEqual([10, 11, 12, 20, 21, 22]);
    });
    it("Should give the neighbours from position 22", () => {
        expect(Neighbours(tablero, 2, 2)).toEqual([11, 12, 21, 22]);
    });


    it("Should give the the next state for the position 00", () => {
        expect(StateNextGeneration(tableroBoolean, 0, 0)).toBe(false);
    });
    it("Should give the the next state for the position 01", () => {
        expect(StateNextGeneration(tableroBoolean, 0, 1)).toBe(false);
    });
    it("Should give the the next state for the position 02", () => {
        expect(StateNextGeneration(tableroBoolean, 0, 2)).toBe(false);
    });
    it("Should give the the next state for the position 10", () => {
        expect(StateNextGeneration(tableroBoolean, 1, 0)).toBe(true);
    });
    it("Should give the the next state for the position 11", () => {
        expect(StateNextGeneration(tableroBoolean, 1, 1)).toBe(true);
    });
    it("Should give the the next state for the position 12", () => {
        expect(StateNextGeneration(tableroBoolean, 1, 2)).toBe(true);
    });
    it("Should give the the next state for the position 20", () => {
        expect(StateNextGeneration(tableroBoolean, 2, 0)).toBe(false);
    });
    it("Should give the the next state for the position 12", () => {
        expect(StateNextGeneration(tableroBoolean, 2, 0)).toBe(false);
    });

});