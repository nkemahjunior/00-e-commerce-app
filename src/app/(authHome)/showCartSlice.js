'use client'

import { createSlice } from '@reduxjs/toolkit'

export const showCartSlice = createSlice({
  name: 'showCart',
  initialState: {
    show:false,
    itemsInCart:[],
    numberOfItemsInCart:0,
  },

  reducers: {

    showCart: state => {

      state.show = true
    },

    hideCart: state => {
      state.show = false
    },

    addItemToCart:(state,action)  => {
      
      state.itemsInCart = action.payload
    },

    increaseNumberOfItems: (state,action) =>{
      state.numberOfItemsInCart = action.payload
    }

  }
})

// Action creators are generated for each case reducer function
export const { showCart,hideCart,addItemToCart,increaseNumberOfItems} = showCartSlice.actions

export default showCartSlice.reducer