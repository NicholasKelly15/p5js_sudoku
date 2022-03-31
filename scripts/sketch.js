const BACKGROUND_COLOR = [230, 230, 230];
const BOARD_THICK_LINE_WIDTH = 5;
const BOARD_THIN_LINE_WIDTH = 1;
const STARTING_NUMBERS_TEXT_COLOR = [0, 0, 0];
const ADDED_NUMBERS_TEXT_COLOR = [0, 200, 0];

 var boardDisplaySize = [500, 500];

function drawSudokuGrid() {
  noFill()
  strokeWeight(BOARD_THICK_LINE_WIDTH);
  noSmooth();

  rect(BOARD_THICK_LINE_WIDTH / 2, BOARD_THICK_LINE_WIDTH / 2, width - BOARD_THICK_LINE_WIDTH, height - BOARD_THICK_LINE_WIDTH);
  for (let i = 1 ; i < 3 ; i++) {
    line((i / 3) * width, 0, (i / 3) * width, height);
  }
  for (let i = 1 ; i < 3 ; i++) {
    line(0, (i / 3) * height, width, (i / 3) * height);
  }

  strokeWeight(BOARD_THIN_LINE_WIDTH)
  for (let i = 1 ; i < 9 ; i++) {
    line((i / 9) * width, 0, (i / 9) * width, height);
  }
  for (let i = 1 ; i < 9 ; i++) {
    line(0, (i / 9) * height, width, (i / 9) * height);
  }
}

function drawSudokuNumber(value, xGrid, yGrid) {
  x = boardDisplaySize[0] * xGrid / 9;
  y = boardDisplaySize[1] * yGrid / 9;
  text(value, x, y, boardDisplaySize[0] / 9, boardDisplaySize[1] / 9);
}

function drawSudokuNumbers(board) {
  textSize((boardDisplaySize[0] / 9) * 0.5);
  textAlign(CENTER, CENTER);
  fill(STARTING_NUMBERS_TEXT_COLOR);
  for (let i = 0 ; i < 81 ; i++) {
    value = board.startingNumbersBoard[i];
    if (value != 0) {
      drawSudokuNumber(value, INDICES_TO_COLUMNS[i], INDICES_TO_ROWS[i]);
    }
  }

  fill(ADDED_NUMBERS_TEXT_COLOR);
  for (let i = 0 ; i < 81 ; i++) {
    value = board.addedNumbersBoard[i];
    if (value != 0) {
      drawSudokuNumber(value, INDICES_TO_COLUMNS[i], INDICES_TO_ROWS[i]);
    }
  }
}


var editingBoard = false;
var buttonsDiv = document.getElementById("top-menu");
var canvasDiv = document.getElementById("canvas");
var board = new Board();

function setup() {
  var canvas = createCanvas(boardDisplaySize[0], boardDisplaySize[1]);
  canvas.parent("canvas");
  boardDisplaySize = [canvasDiv.scrollHeight, canvasDiv.scrollHeight];
  resizeCanvas(boardDisplaySize[0], boardDisplaySize[1]);
}

function draw() {
  background(BACKGROUND_COLOR[0], BACKGROUND_COLOR[1], BACKGROUND_COLOR[2]);
  drawSudokuGrid();
  drawSudokuNumbers(board);
}

function windowResized() {
  boardDisplaySize = [canvasDiv.scrollHeight, canvasDiv.scrollHeight];
  resizeCanvas(boardDisplaySize[0], boardDisplaySize[1]);
}

function solve() {
  board.solve();
}

function reset() {
  board.reset();
}

function clearMenuButtons() {
  buttonsDiv.textContent = "";
}

function addMenuButton(text, className, onClick) {
  let button = document.createElement("button");
  button.innerHTML = text;
  button.className = className;
  button.onclick = onClick;
  buttonsDiv.appendChild(button);
}

function setBoardToThreeStar() {
  board.setBoardToThreeStar();
}

function setBoardToFiveStar() {
  board.setBoardToFiveStar();
}

function setBoardToInsane() {
  board.setBoardToInsane();
}

function editBoard() {
  editingBoard = true;
  clearMenuButtons()
  addMenuButton("DONE", "done-button", stopEditingBoard);
  addMenuButton("3 STAR", "three-star-button", setBoardToThreeStar);
  addMenuButton("5 STAR", "five-star-button", setBoardToFiveStar);
  addMenuButton("INSANE", "insane-button", setBoardToInsane);
}

function stopEditingBoard() {
  editingBoard = false;
  clearMenuButtons();
  addMenuButton("SOLVE", "solve-button", solve);
  addMenuButton("RESET", "reset-button", reset);
  addMenuButton("EDIT", "edit-button", editBoard);
}
