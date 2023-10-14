'use client'

import { configureStore } from '@reduxjs/toolkit'

import showCartReducer from './showCartSlice'

export default configureStore({
  reducer: {
    showCart: showCartReducer
  }
})