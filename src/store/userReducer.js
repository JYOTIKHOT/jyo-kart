import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userData",
  initialState: {
    list: [],
    loggedInUser: null,
    loginFormError: "",
    registerFormError: "",
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      const loggedInUser = state.list?.find(
        (user) => username === user.username && password === user.password
      );
      if (!loggedInUser) {
        state.loginFormError = "Username password combination doesn't exist";
      } else if (!username || !password) {
        state.loginFormError = "All fields are mandatory";
      } else {
        state.loginFormError = "";
        state.loggedInUser = loggedInUser;
        state.isAuthenticated = true;
      }
    },
    logout: (state) => {
      state.loggedInUser = null;
      state.isAuthenticated = false;
    },
    register: (state, action) => {
      const { username, email, password } = action.payload;
      const isUserAlreadyPresent = state.list?.some(
        (user) => user.username === username
      );
      if (isUserAlreadyPresent) {
        state.registerFormError = "User already exist";
      } else if (!email || !username || !password) {
        state.registerFormError = "All fields are mandatory";
      } else {
        state.registerFormError = "";
        const newUser = { email, username, password };
        state.list?.push(newUser);
        state.loggedInUser = newUser;
        state.isAuthenticated = true;
      }
    },
  },
});

export const { login, logout, register } = userSlice.actions;

export const loggedInUserSelector = (state) => state.userData.loggedInUser;
export const isAuthenticatedSelector = (state) =>
  state.userData.isAuthenticated;

export default userSlice.reducer;
