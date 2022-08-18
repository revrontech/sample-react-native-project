import { createAsyncThunk } from "@reduxjs/toolkit";

export const addNewCounter = createAsyncThunk(
    'counter/fetchCounter',
    async () => {
        const response = await (await fetch('https://api.npms.io/v2/search?q=react')).json()
        return response
    }
)