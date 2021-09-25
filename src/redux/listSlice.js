import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  lists: [],
};

export const getLists = createAsyncThunk("list/getLists", async (id) => {
  const { data } = await axios.get(`/api/lists?boardId=${id}`);
  return data;
});

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
  extraReducers: {
    [getLists.pending]: (state, action) => {
      state.status = "loading";
    },
    [getLists.fulfilled]: (state, action) => {
      state.lists = action.payload.response.lists;
      state.status = "success";
    },
    [getLists.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default listSlice.reducer;
// export const { } = listSlice.actions;
