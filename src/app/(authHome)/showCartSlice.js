"use client";

import { createSlice } from "@reduxjs/toolkit";

export const showCartSlice = createSlice({
  name: "showCart",
  initialState: {
    show: false,
    showFilter: false,
    itemsInCart: [],
    numberOfItemsInCart: 0,
  },

  reducers: {
    showCart: (state) => {
      state.show = true;
    },

    hideCart: (state) => {
      state.show = false;
    },

    showTheFilter: (state) => {
      state.showFilter = true;
    },

    hideTheFilter: (state) => {
      state.showFilter = false;
    },

    addItemToCart: (state, action) => {
      state.itemsInCart = action.payload;
    },

    clearCart: (state) => {
      state.itemsInCart = [];
      state.numberOfItemsInCart = 0;
    },

    increaseNumberOfItems: (state, action) => {
      state.numberOfItemsInCart = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  showCart,
  hideCart,
  showTheFilter,
  hideTheFilter,
  addItemToCart,
  increaseNumberOfItems,
  clearCart,
} = showCartSlice.actions;

export default showCartSlice.reducer;
