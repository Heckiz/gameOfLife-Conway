
export const survivalRules = (grid) => {

    grid.map((rows, rowIndex) => rows.map((cols, colIndex) => {

        let neighbours = 0;

        if (colIndex != 0 && grid[rowIndex][colIndex - 1]) neighbours++;
        if (grid[rowIndex][colIndex + 1]) neighbours++;
        if (rowIndex != 0 && grid[rowIndex - 1][colIndex]) neighbours++;
        if ((rows.length - 1) != rowIndex && grid[rowIndex + 1][colIndex]) neighbours++;
        if (colIndex != 0 && rowIndex != 0 && grid[rowIndex - 1][colIndex - 1]) neighbours++;
        if ((rows.length - 1) != rowIndex && (cols.length - 1) != colIndex && grid[rowIndex + 1][colIndex + 1]) neighbours++;
        if ((rows.length - 1) != rowIndex && colIndex != 0 && grid[rowIndex + 1][colIndex - 1]) neighbours++;
        if (rowIndex != 0 && (cols.length - 1) != colIndex && grid[rowIndex - 1][colIndex + 1]) neighbours++;

        console.log(neighbours)
    }
    ))
}
