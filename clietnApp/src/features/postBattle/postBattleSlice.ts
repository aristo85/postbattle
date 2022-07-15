import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchPostbattleData } from "./postBattleAPI";

export type Player = {
  id: number;
  name: string;
  score: number;
  state: string;
  totalKills: number;
  deaths: number;
};

export type Teams = {
  winners: Player[];
  losers: Player[];
};

export interface PostBattleState {
  teams: Teams | null;
  status: "idle" | "loading" | "failed";
}

const initialState: PostBattleState = {
  teams: null,
  status: "idle",
};

export const fetchData = createAsyncThunk(
  "battle/fetchPostbattle",
  async () => {
    const response = await fetchPostbattleData();
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const postbattleSlice = createSlice({
  name: "postbattle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "idle";
        state.teams = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectPstbattleData = (state: RootState) => state.postbattle.teams;

export default postbattleSlice.reducer;
