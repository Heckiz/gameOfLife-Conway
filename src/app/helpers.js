
export const survivalRules = (grid, colIndex, rowIndex, climit, rlimit, alive) => {
    let neighbours = 0;

    if (colIndex != 0 && grid[rowIndex][colIndex - 1]) neighbours++;
    if ((climit - 1) != colIndex && grid[rowIndex][colIndex + 1]) neighbours++;
    if (rowIndex != 0 && grid[rowIndex - 1][colIndex]) neighbours++;
    if ((rlimit - 1) != rowIndex && grid[rowIndex + 1][colIndex]) neighbours++;
    if (colIndex != 0 && rowIndex != 0 && grid[rowIndex - 1][colIndex - 1]) neighbours++;
    if ((rlimit - 1) != rowIndex && (climit - 1) != colIndex && grid[rowIndex + 1][colIndex + 1]) neighbours++;
    if ((rlimit - 1) != rowIndex && colIndex != 0 && grid[rowIndex + 1][colIndex - 1]) neighbours++;
    if (rowIndex != 0 && (climit - 1) != colIndex && grid[rowIndex - 1][colIndex + 1]) neighbours++;

    console.log('row:', rowIndex, 'col:', colIndex, 'neighbours', neighbours)

    if (!alive && neighbours === 3) {
        return true
    }
    else if (alive && neighbours < 2 || alive && neighbours > 3) {
        return false
    } else {
        grid[rowIndex][colIndex]
    }


}

