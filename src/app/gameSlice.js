import { createSlice } from '@reduxjs/toolkit'
import { survivalRules } from './helpers';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    gameConfig: {
      rows: 50,
      cols: 50
    },
    cellGrid: [],
    running: false,
  },
  reducers: {

    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the gistate because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes

    newCellGrid: (state, action) => {

      const { rows, cols } = action.payload;
      const grid = [];
      for (let i = 0; i < rows; i++) {
        grid.push(Array.from(Array(cols), () => false));
      }

      state.cellGrid = grid;
    },

    handleLifeCell: (state, action) => {
      const { row, col } = action.payload;

      let newGrid = state.cellGrid;
      newGrid[row][col] = !state.cellGrid[row][col];

      state.cellGrid = newGrid;
    },
    handleRunning: state => {
      state.running = !state.running;

    },
    playSimulation: state => {
      const { cellGrid, gameConfig } = state;
      const { cols: climit, rows: rlimit } = gameConfig;

      let nextGeneration = cellGrid;
      cellGrid.map((rows, rowIndex) => rows.map((cols, colIndex) => {
        nextGeneration[rowIndex][colIndex] = survivalRules(cellGrid, colIndex, rowIndex, climit, rlimit, cols);
      }))
      console.log(nextGeneration);

    }
  }
})

// Action creators are generated for each case reducer function
export const { newCellGrid, handleLifeCell, handleRunning, playSimulation } = gameSlice.actions

export default gameSlice.reducer
