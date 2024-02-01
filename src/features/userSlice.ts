import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { User } from "../types/User";

interface UserState {
  user: User | null;
  username: string;
  password: string;
  isAuthorizated: boolean;
  status: "idle" | "loading" | "failed";
}

const initialState: UserState = {
  user: null,
  username: "",
  password: "",
  isAuthorizated: false,
  status: "idle",
};

export const getAuthUser = createAsyncThunk("userInfo/fetchUserInfo", async () => {
  const response = await fetch("./authUser.json");
  const user = await response.json();

  return user;
});

export const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { username, password } = action.payload;
      state.username = username;
      state.password = password;
    },
    setIsAuthorizated: (state, action) => {
      state.isAuthorizated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAuthUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAuthUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "idle";
      })
      .addCase(getAuthUser.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setUser, setIsAuthorizated } = userSlice.actions;

export const login = (state: RootState) => state.user.username;
export const password = (state: RootState) => state.user.password;
export const userData = (state: RootState) => state.user.user;
export const isAuthorizated = (state: RootState) => state.user.isAuthorizated;

export default userSlice.reducer;