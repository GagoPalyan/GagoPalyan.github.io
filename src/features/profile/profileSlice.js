import { createSlice } from "@reduxjs/toolkit";
import { setProfileReducer } from "./profileReducers";

const initialState = {
  user: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile: setProfileReducer,
  },
  extraReducers: (builder) => {},
});

export const { setProfile } = profileSlice.actions;

export const selectUser = (state) => state.profile.user;

export default profileSlice.reducer;
