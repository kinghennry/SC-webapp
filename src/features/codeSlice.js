import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../app/api";

export const addCode = createAsyncThunk(
  "code/addCode",
  async ({ codeData, history }, { rejectWithValue }) => {
    try {
      const res = await api.addCode(codeData);
      history.push("/success");
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const codeSlice = createSlice({
  name: "code",
  initialState: {
    codes: [],
    error: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [addCode.pending]: (state) => {
      state.loading = true;
    },
    [addCode.fulfilled]: (state, action) => {
      state.loading = false;
      state.codes = [action.payload];
    },
    [addCode.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});
export default codeSlice.reducer;
