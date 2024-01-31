import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { User } from "../types/User";

interface UserState {
  user: User | null;
  username: string;
  password: string;
  status: "idle" | "loading" | "failed";
}

const initialState: UserState = {
  user: null,
  username: "",
  password: "",
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

export const { setUser } = userSlice.actions;

export const login = (state: RootState) => state.user.username;
export const password = (state: RootState) => state.user.password;
export const userData = (state: RootState) => state.user.user;

export default userSlice.reducer;