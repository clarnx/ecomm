import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggIn: false },
  reducers: {
    login(state) {
      state.isLoggIn = true
    },
    logout(state) {
      state.isLoggIn = false
    },
  },
})

export const authActions = authSlice.actions
export default authSlice