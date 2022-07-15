import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postbattleReducer from '../features/postBattle/postBattleSlice';

export const store = configureStore({
  reducer: {
    postbattle: postbattleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
