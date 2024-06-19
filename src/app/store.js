import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"; // adjust the path as per your actual file structure

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers here if needed
  },
  // Add middleware, enhancers, and other configurations as needed
});

export default store;
