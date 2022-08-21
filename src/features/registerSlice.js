import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../app/api";

// loginAdmin
export const register = createAsyncThunk(
  "signIn/register",
  async ({ formData, history }, { rejectWithValue }) => {
    try {
      const res = await api.signIn(formData);
      history.push("/signup");
      return res.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState: {
    user: null,
    error: "",
    loading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});
export const { setUser } = registerSlice.actions;
export default registerSlice.reducer;
