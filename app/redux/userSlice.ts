import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export interface CounterState {
  user: any
}

const initialState: CounterState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
    },
  },
})

// Action creators are generated for each case reducer function
export const {login, logout} = userSlice.actions
export const selectUser = (state: any) => state.user.user
export default userSlice.reducer
