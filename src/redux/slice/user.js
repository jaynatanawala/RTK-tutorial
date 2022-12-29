import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, signUp } from "../../lib/apis";

export const signUpUser = createAsyncThunk("user/sign-up", async (data) => {
  const result = await signUp(data);

  return result.data;
});

export const loginUser = createAsyncThunk("user/login", async (data) => {
  const result = await login(data);

  return result.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: { name: "", email: "", password: "" },
    token: "",
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signUpUser.fulfilled, (state, action) => {
        localStorage.setItem("token", action.payload.data.token);
        localStorage.setItem("user", JSON.stringify(action.payload.data.user));
        state.token = action.payload.data.token;
        state.user = action.payload.data.user;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        localStorage.setItem("token", action.payload.data.token);
        localStorage.setItem("user", JSON.stringify(action.payload.data.user));
        state.token = action.payload.data.token;
        state.user = action.payload.data.user;
      });
  },
});

export default userSlice.reducer;
