import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import authSlices from './slices/slicesAuth'
import modalSlices from './slices/sliceModal'

const store = configureStore({
    reducer: {
        authUser: authSlices,
        modal: modalSlices,
    }
})

export default store