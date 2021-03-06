import { createSlice } from '@reduxjs/toolkit'
import { oscillatorsData, resizeGrid, survivalRules } from './helpers';

export const gameSlice = createSlice({
  name: 'gameOfLife',
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

    newCellGrid: (state, { payload }) => {
      const { rows, cols } = state.gameConfig;

      // a new empty cell grid is created
      const grid = [];
      for (let i = 0; i < rows; i++) {
        grid[i] = Array.from(Array(cols), () => false);
      };

      // check if there is data in the localStorage
      const gridStorage = JSON.parse(window.localStorage.getItem("cellgrid"));

      if (gridStorage && payload) { //if the payload of true loads from the useEffect

        const { cellGrid, gameConfig, generations } = gridStorage
        state.cellGrid = cellGrid;
        state.gameConfig.rows = gameConfig.rows;
        state.gameConfig.cols = gameConfig.cols;
        state.gameConfig.speed = gameConfig.speed;
        state.generations = generations;

      } else { //if it false loads from the restart button
        state.cellGrid = grid;
        state.generations = 0;
        window.localStorage.setItem("cellgrid", JSON.stringify(state))
      }
    },

    handleGrid: (state, { payload }) => {
      state.cellGrid = resizeGrid(state.cellGrid, payload);
      state.gameConfig.rows = parseInt(payload)
      state.gameConfig.cols = parseInt(payload) + 20;
    },

    handleSpeed: (state, { payload }) => {
      state.gameConfig.speed = -payload
    },

    handleLifeCell: (state, { payload }) => {
      const { row, col } = payload;

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

      // a new grid is created based on a one-dimensional array
      let newGrid = [];
      let key = 0;
      for (let i = 0; i < rows; i++) {
        newGrid.push(Array.from(Array(cols), () => nextGeneration[key++]));
      }

      state.cellGrid = newGrid;
      state.generations++;
      window.localStorage.setItem("cellgrid", JSON.stringify(state))
    },

    drawOscillators: state => {
      const { cellGrid, gameConfig, generations } = oscillatorsData()
      state.cellGrid = cellGrid;
      state.gameConfig.rows = gameConfig.rows
      state.gameConfig.cols = gameConfig.cols
      state.generations = generations
    }
  }
})

export const {
  newCellGrid,
  handleLifeCell,
  handleRunning,
  handleGrid,
  handleSpeed,
  drawOscillators,
  playSimulation
} = gameSlice.actions

export default gameSlice.reducer
