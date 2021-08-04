
export const survivalRules = (grid, rlimit, climit) => {
    const neighboursPositions = [
        [0, 1],
        [0, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
        [-1, -1],
        [1, 0],
        [-1, 0]
    ];
    const nextGeneration = [];

    grid.map((rows, rowIndex) =>
        rows.map((cols, colIndex) => {

            let neighbours = 0;

            neighboursPositions.forEach(([x, y]) => {
                const newRow = (rowIndex + x + rlimit) % rlimit
                const newCol = (colIndex + y + climit) % climit

                if (grid[newRow][newCol] == true) neighbours++
            })

            let alive = cols;

            if (!alive && neighbours === 3) {
                nextGeneration.push(true)
            }
            else if (alive && neighbours < 2 || alive && neighbours > 3) {
                nextGeneration.push(false)
            } else {
                nextGeneration.push(grid[rowIndex][colIndex])
            }
        }))

    return nextGeneration;
}