function printGrid(grid) {
  for (let row of grid) {
    console.log(row.join(" "));
  }
  console.log("");
}

function findPathToGoal(grid, startRow, startCol) {
  const rows = grid.length;
  const cols = grid[0].length;

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const queue = [];

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  queue.push({ row: startRow, col: startCol, steps: 0 });
  visited[startRow][startCol] = true;

  while (queue.length > 0) {
    const { row, col, steps } = queue.shift();

    if (grid[row][col] === -1) {
      console.log(`Đã đến đích trong ${steps} bước.`);
      return steps;
    }

    grid[row][col] = "-";
    printGrid(grid);

    let found = false;

    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        !visited[newRow][newCol] &&
        grid[newRow][newCol] !== 1
      ) {
        visited[newRow][newCol] = true;
        queue.push({ row: newRow, col: newCol, steps: steps + 1 });
        found = true;
      }
    }

    if (!found) {
      grid[row][col] = 0;
    }
  }

  return -1;
}

const grid = [
  [0, 0, 0, 0, 1],
  [1, 1, 0, 1, -1],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
];

const startRow = 0,
  startCol = 0;

const result = findPathToGoal(grid, startRow, startCol);
console.log(`Số bước đi đến đích là: ${result}`);
