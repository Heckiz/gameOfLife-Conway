import { createSlice } from '@reduxjs/toolkit'
import { resizeGrid, survivalRules } from './helpers';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    gameConfig: {
      rows: 30,
      cols: 50,
      speed: 300
    },
    cellGrid: [],
    running: false,
    generations: 0
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the gistate because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes

    newCellGrid: state => {
      const { rows, cols } = state.gameConfig;
      const grid = [];
      for (let i = 0; i < rows; i++) {
        grid[i] = Array.from(Array(cols), () => false);
      }
      state.cellGrid = grid;
      state.generations = 0;

    },

    handleGrid: (state, action) => {
      state.cellGrid = resizeGrid(state.cellGrid, action.payload);
      state.gameConfig.rows = action.payload
      state.gameConfig.cols = parseInt(action.payload) + 20;
    },
    handleSpeed: (state, action) => {
      state.gameConfig.speed = -action.payload
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
      const { cols, rows } = gameConfig;
      let nextGeneration = survivalRules(cellGrid, parseInt(rows), parseInt(cols));
      let newGrid = [];
      let key = 0;

      for (let i = 0; i < rows; i++) {
        newGrid.push(Array.from(Array(cols), () => nextGeneration[key++]));
      }

      state.cellGrid = newGrid;
      state.generations++;
    }
  }
})

export const { newCellGrid, handleLifeCell, handleRunning, handleGrid, handleSpeed, playSimulation } = gameSlice.actions

export default gameSlice.reducer
