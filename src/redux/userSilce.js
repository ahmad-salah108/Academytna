import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser:null,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    successLogin: (state,action) => {
        state.currentUser=action.payload.user;
    },
    logout:(state)=>{
        state.currentUser=null;
    }
  },
})

// Action creators are generated for each case reducer function
export const { successLogin ,logout} = counterSlice.actions

export default counterSlice.reducer