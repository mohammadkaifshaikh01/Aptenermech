"use client"

import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increase: (e) => {
      if (e.value < 98) {
        e.value += 1;
      }
    },
    decrease: (e) => {
      if (e.value > 0) {
        e.value -= 1;
      }  
    
    },
    reset: (e) => {
      e.value = 0;
    },
  },
});


export const { increase, decrease, reset } = counterSlice.actions;


export default counterSlice.reducer;
