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

const TESTING_BOARD_4STAR_1 = [
    0, 0, 0, 1, 0, 5, 0, 6, 8, 
    0, 0, 0, 0, 0, 0, 7, 0, 1, 
    9, 0, 1, 0, 0, 0, 0, 3, 0, 
    0, 0, 7, 0, 2, 6, 0, 0, 0, 
    5, 0, 0, 0, 0, 0, 0, 0, 3, 
    0, 0, 0, 8, 7, 0, 4, 0, 0, 
    0, 3, 0, 0, 0, 0, 8, 0, 5, 
    1, 0, 5, 0, 0, 0, 0, 0, 0, 
    7, 9, 0, 4, 0, 1, 0, 0, 0
]

const TESTING_BOARD_5STAR_1 = [
    0, 0, 3, 0, 0, 0, 0, 0, 0, 
    0, 0, 7, 0, 4, 0, 3, 0, 1, 
    0, 9, 0, 0, 2, 0, 0, 0, 0, 
    0, 6, 0, 0, 7, 0, 0, 9, 0, 
    8, 0, 0, 0, 0, 0, 5, 3, 0, 
    0, 4, 0, 5, 0, 0, 0, 0, 2, 
    0, 0, 0, 7, 0, 0, 6, 8, 4, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 
    9, 0, 4, 0, 0, 1, 0, 0, 0
]

const WORLD_HARDEST_BOARD = [
    8, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 3, 6, 0, 0, 0, 0, 0, 
    0, 7, 0, 0, 9, 0, 2, 0, 0, 
    0, 5, 0, 0, 0, 7, 0, 0, 0, 
    0, 0, 0, 0, 4, 5, 7, 0, 0, 
    0, 0, 0, 1, 0, 0, 0, 3, 0, 
    0, 0, 1, 0, 0, 0, 0, 6, 8, 
    0, 0, 8, 5, 0, 0, 0, 1, 0, 
    0, 9, 0, 0, 0, 0, 4, 0, 0
]

function intArrayCopy(array) {
    newArray = [];
    for (let i = 0 ; i < array.length ; i++) {
        newArray[i] = array[i];
    }
    return newArray;
}

class Board {
    constructor() {
        this.board = intArrayCopy(EMPTY_BOARD);
        this.startingNumbersBoard = intArrayCopy(this.board);
        this.addedNumbersBoard = intArrayCopy(EMPTY_BOARD);

        this.possibilities = [];
        for (let i = 0 ; i < 81 ; i++) {
            this.possibilities[i] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        }
    }

    setBoardToThreeStar() {
        this.board = intArrayCopy(TESTING_BOARD_3STAR_1);
        this.startingNumbersBoard = intArrayCopy(TESTING_BOARD_3STAR_1);
    }

    setBoardToFiveStar() {
        this.board = intArrayCopy(TESTING_BOARD_5STAR_1);
        this.startingNumbersBoard = intArrayCopy(TESTING_BOARD_5STAR_1);
    }

    setBoardToInsane() {
        this.board = intArrayCopy(WORLD_HARDEST_BOARD);
        this.startingNumbersBoard = intArrayCopy(WORLD_HARDEST_BOARD);
    }

    // copies and returns the board
    copy() {
        let board = new Board();
        board.board = intArrayCopy(this.board);
        board.startingNumbersBoard = intArrayCopy(this.startingNumbersBoard)
        board.addedNumbersBoard = intArrayCopy(this.addedNumbersBoard);
        return board;
    }

    loadCopy(board) {
        this.board = board.board;
        this.startingNumbersBoard = board.startingNumbersBoard;
        this.addedNumbersBoard = board.addedNumbersBoard;
        this.updatePossiblities();
    }

    // returns false if there a cell that has no possibilities
    isValid() {
        for (let i = 0 ; i < this.board.length ; i++) {
            if (this.board[i] === 0 && this.possibilities[i].length === 0) {
                return false;
            }
        }
        return true;
    }

    isSolution() {
        
    }

    isFull() {
        for (let i = 0 ; i < this.board.length ; i++) {
            if (this.board[i] === 0) {
                return false;
            }
        }
        return true;
    }

    getDirectPossibilities(gridIndex) {
        // if the sudoku grid already has a value at the index
        if (this.board[gridIndex] !== 0) {
            return []
        }

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

    // returns true if the value is a possibility in the cellList excluding the gridIndex itself
    #checkCellsForPossibleValue(cellList, gridIndex, value) {
        for (let i = 0 ; i < cellList.length ; i++) {
            for (let j = 0 ; j < this.possibilities[cellList[i]].length ; j++) {
                if (this.possibilities[cellList[i]][j] === value && cellList[i] !== gridIndex) {
                    return true;
                }
            }
        }
        return false;
    }

    // returns 0 if there is no guaranteed answer for the cell, otherwise returns the cell's value
    getOnlyPossibleCellAnswer(gridIndex) {
        // if the sudoku grid already has a value at the index
        if (this.board[gridIndex] !== 0) {
            return 0;
        }

        for (let i = 0 ; i < this.possibilities[gridIndex].length ; i++) {
            let row = ROWS_TO_INDICES[INDICES_TO_ROWS[gridIndex]];
            let column = COLUMNS_TO_INDICES[INDICES_TO_COLUMNS[gridIndex]];
            let box = BOXES_TO_INDICES[INDICES_TO_BOXES[gridIndex]];

            // check the row that the gridIndex is in
            if (!this.#checkCellsForPossibleValue(row, gridIndex, this.possibilities[gridIndex][i])) {
                return this.possibilities[gridIndex][i]
            }

            // check the column that the gridIndex is in
            if (!this.#checkCellsForPossibleValue(column, gridIndex, this.possibilities[gridIndex][i])) {
                return this.possibilities[gridIndex][i]
            }

            // check the box that the gridIndex is in
            if (!this.#checkCellsForPossibleValue(box, gridIndex, this.possibilities[gridIndex][i])) {
                return this.possibilities[gridIndex][i]
            }

        }

        return 0;
    }

    updatePossiblities() {
        for (let i = 0 ; i < 81 ; i++) {
            this.possibilities[i] = this.getDirectPossibilities(i);
        }
        for (let i = 0 ; i < 81 ; i++) {
            let onlyPossibleAnswer = this.getOnlyPossibleCellAnswer(i);
            if (onlyPossibleAnswer !== 0) {
                this.possibilities[i] = [onlyPossibleAnswer];
            }
        }
    }

    getOpenCellWithFewestPossibilities() {
        let fewestPossibilities = 10;
        let bestCell = -1;
        for (let i = 0 ; i < this.board.length ; i++) {
            if (this.possibilities[i].length < fewestPossibilities && (this.board[i] === 0)) {
                bestCell = i;
                fewestPossibilities = this.possibilities[i].length;
            }
        }
        return bestCell;
    }

    addCellValue(gridIndex, value) {
        this.board[gridIndex] = value;
        this.addedNumbersBoard[gridIndex] = value;
    }

    solveUntilNoGuaranteedMoves() {
        this.updatePossiblities();
        let changed = true;
        while (changed && this.isValid()) {
            changed = false;
            for (let i = 0 ; i < 81 ; i++) {
                if (this.possibilities[i].length === 1) {
                    this.addCellValue(i, this.possibilities[i][0])
                    changed = true;
                    break;
                }
            }
            this.updatePossiblities();
        }
    }

    solve() {
        this.solveUntilNoGuaranteedMoves();
        if (!this.isFull() && this.isValid()) {
            this.updatePossiblities();
            let cellGuess = this.getOpenCellWithFewestPossibilities();
            for (let i = 0 ; i < this.possibilities[cellGuess].length ; i++) {
                let savedBoard = this.copy();
                this.addCellValue(cellGuess, this.possibilities[cellGuess][i]);
                let solved = this.solve();
                if (!solved) {
                    this.loadCopy(savedBoard);
                    continue;
                } else {
                    return true;
                }
            }
        } else if (this.isFull()) {
            return true;
        } else if (!this.isValid()) {
            return false;
        }
    }

    reset() {
        this.board = intArrayCopy(this.startingNumbersBoard);
        this.addedNumbersBoard = intArrayCopy(EMPTY_BOARD);

        this.possibilities = []
        for (let i = 0 ; i < 81 ; i++) {
            this.possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        }
    }
}