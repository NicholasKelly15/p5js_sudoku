// these give the board indices that are in each row, column, and box of the grid.
const ROWS_TO_INDICES = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8], 
    [9, 10, 11, 12, 13, 14, 15, 16, 17], 
    [18, 19, 20, 21, 22, 23, 24, 25, 26], 
    [27, 28, 29, 30, 31, 32, 33, 34, 35], 
    [36, 37, 38, 39, 40, 41, 42, 43, 44], 
    [45, 46, 47, 48, 49, 50, 51, 52, 53], 
    [54, 55, 56, 57, 58, 59, 60, 61, 62], 
    [63, 64, 65, 66, 67, 68, 69, 70, 71], 
    [72, 73, 74, 75, 76, 77, 78, 79, 80]
]

const COLUMNS_TO_INDICES = [
    [0, 9, 18, 27, 36, 45, 54, 63, 72], 
    [1, 10, 19, 28, 37, 46, 55, 64, 73], 
    [2, 11, 20, 29, 38, 47, 56, 65, 74], 
    [3, 12, 21, 30, 39, 48, 57, 66, 75], 
    [4, 13, 22, 31, 40, 49, 58, 67, 76], 
    [5, 14, 23, 32, 41, 50, 59, 68, 77], 
    [6, 15, 24, 33, 42, 51, 60, 69, 78], 
    [7, 16, 25, 34, 43, 52, 61, 70, 79], 
    [8, 17, 26, 35, 44, 53, 62, 71, 80]
]

const BOXES_TO_INDICES = [
    [0, 1, 2, 9, 10, 11, 18, 19, 20], 
    [3, 4, 5, 12, 13, 14, 21, 22, 23], 
    [6, 7, 8, 15, 16, 17, 24, 25, 26], 
    [27, 28, 29, 36, 37, 38, 45, 46, 47], 
    [30, 31, 32, 39, 40, 41, 48, 49, 50], 
    [33, 34, 35, 42, 43, 44, 51, 52, 53], 
    [54, 55, 56, 63, 64, 65, 72, 73, 74], 
    [57, 58, 59, 66, 67, 68, 75, 76, 77], 
    [60, 61, 62, 69, 70, 71, 78, 79, 80]
]

// these give the row, column, and box that each grid cell is located within
const INDICES_TO_ROWS = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 
    2, 2, 2, 2, 2, 2, 2, 2, 2, 
    3, 3, 3, 3, 3, 3, 3, 3, 3, 
    4, 4, 4, 4, 4, 4, 4, 4, 4, 
    5, 5, 5, 5, 5, 5, 5, 5, 5, 
    6, 6, 6, 6, 6, 6, 6, 6, 6, 
    7, 7, 7, 7, 7, 7, 7, 7, 7, 
    8, 8, 8, 8, 8, 8, 8, 8, 8
]

const INDICES_TO_COLUMNS = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 
    0, 1, 2, 3, 4, 5, 6, 7, 8, 
    0, 1, 2, 3, 4, 5, 6, 7, 8, 
    0, 1, 2, 3, 4, 5, 6, 7, 8, 
    0, 1, 2, 3, 4, 5, 6, 7, 8, 
    0, 1, 2, 3, 4, 5, 6, 7, 8, 
    0, 1, 2, 3, 4, 5, 6, 7, 8, 
    0, 1, 2, 3, 4, 5, 6, 7, 8, 
    0, 1, 2, 3, 4, 5, 6, 7, 8
]

const INDICES_TO_BOXES = [
    0, 0, 0, 1, 1, 1, 2, 2, 2, 
    0, 0, 0, 1, 1, 1, 2, 2, 2, 
    0, 0, 0, 1, 1, 1, 2, 2, 2, 
    3, 3, 3, 4, 4, 4, 5, 5, 5, 
    3, 3, 3, 4, 4, 4, 5, 5, 5, 
    3, 3, 3, 4, 4, 4, 5, 5, 5, 
    6, 6, 6, 7, 7, 7, 8, 8, 8, 
    6, 6, 6, 7, 7, 7, 8, 8, 8, 
    6, 6, 6, 7, 7, 7, 8, 8, 8
]

// testing boards
const EMPTY_BOARD = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0
]

const TESTING_BOARD_3STAR_1 = [
    0, 0, 0, 0, 9, 8, 7, 6, 0, 
    9, 0, 0, 7, 0, 0, 4, 0, 0, 
    7, 2, 0, 0, 4, 0, 0, 0, 0, 
    5, 0, 0, 0, 0, 0, 0, 3, 0, 
    8, 0, 1, 0, 0, 0, 2, 0, 6, 
    0, 3, 0, 0, 0, 0, 0, 0, 7, 
    0, 0, 0, 0, 2, 0, 0, 5, 3, 
    0, 0, 4, 0, 0, 3, 0, 0, 1, 
    0, 7, 5, 8, 6, 0, 0, 0, 0
]

class Board {
    constructor() {
        this.board = TESTING_BOARD_3STAR_1;
        this.startingNumbersBoard = this.board;
        this.addedNumbersBoard = EMPTY_BOARD;

        this.possibilities = []
        for (let i = 0 ; i < 81 ; i++) {
            this.possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        }
        this.refreshPossiblities()
    }

    getDirectPossibilities(gridIndex) {
        let possibilities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let row = ROWS_TO_INDICES[INDICES_TO_ROWS[gridIndex]];
        let column = COLUMNS_TO_INDICES[INDICES_TO_COLUMNS[gridIndex]];
        let box = BOXES_TO_INDICES[INDICES_TO_BOXES[gridIndex]];
        for (let i = 0 ; i < 9 ; i++) {
            possibilities[this.board[row[i]]] = 0;
            possibilities[this.board[column[i]]] = 0;
            possibilities[this.board[box[i]]] = 0;
        }

        let returnArray = []
        for (let i = 0 ; i < possibilities.length ; i++) {
            if (possibilities[i] !== 0) {
                returnArray.push(possibilities[i]);
            }
        }

        return returnArray;
    }

    refreshPossiblities() {
        for (let i = 0 ; i < 81 ; i++) {
            this.possibilities[i] = this.getDirectPossibilities(i)
        }
    }
}