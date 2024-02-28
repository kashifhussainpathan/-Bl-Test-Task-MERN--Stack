import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInUser: null,
  users: [],
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setUser, setUsers } = userSlice.actions;

export default userSlice.reducer;
