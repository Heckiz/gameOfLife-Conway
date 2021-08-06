import { configureStore } from '@reduxjs/toolkit'
import  gameSlice from './gameOfLife/gameOfLifeSlice';

export default configureStore({
  reducer: {
    gameOfLifeData: gameSlice,
  }
});
