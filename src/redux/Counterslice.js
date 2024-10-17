import { createSlice } from "@reduxjs/toolkit";

// createSlice()-returns automatically reducer as well as action 
export const counterSlice = createSlice({
    name : 'counterApp',
    initialState:{
        value:0
    },
    // Action
    reducers:{
        increment : (state)=>{
            state.value+=1
        },
        decrement : (state)=>{
            state.value-=1
        },
        reset : (state)=>{
            state.value=0
        },
        changeRange : (state,action)=>{
            state.value+=action.payload
        }
    }
})

/* actions are needed for component */
export const {increment,decrement,reset,changeRange} = counterSlice.actions

/* reducers are needed to store for updates */

export default counterSlice.reducer