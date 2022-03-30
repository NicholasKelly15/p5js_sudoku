const BACKGROUND_COLOR = [230, 230, 230];
const BOARD_DISPLAY_SIZE = [600, 600];
const BOARD_THICK_LINE_WIDTH = 3;
const BOARD_THIN_LINE_WIDTH = 1;
const STARTING_NUMBERS_TEXT_COLOR = [0, 0, 0];
const ADDED_NUMBERS_TEXT_COLOR = [0, 255, 112];

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
  x = BOARD_DISPLAY_SIZE[0] * xGrid / 9;
  y = BOARD_DISPLAY_SIZE[1] * yGrid / 9;
  text(value, x, y, BOARD_DISPLAY_SIZE[0] / 9, BOARD_DISPLAY_SIZE[1] / 9);
}

function drawSudokuNumbers(board) {
  textSize((BOARD_DISPLAY_SIZE[0] / 9) * 0.5);
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


function setup() {
  var canvas = createCanvas(BOARD_DISPLAY_SIZE[0], BOARD_DISPLAY_SIZE[1]);
  canvas.parent("canvas")

  board = new Board();
  console.log(board.getDirectPossibilities(0));
}

function draw() {
  background(BACKGROUND_COLOR[0], BACKGROUND_COLOR[1], BACKGROUND_COLOR[2]);
  drawSudokuGrid();
  drawSudokuNumbers(board);
}
