import { createSlice } from '@reduxjs/toolkit'


export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    gameConfig:{
      rows: 20,
      cols: 20
    },
    cellGrid: [],
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the gistate because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes

  }
})

// Action creators are generated for each case reducer function
export const { } = gameSlice.actions

export default gameSlice.reducer
