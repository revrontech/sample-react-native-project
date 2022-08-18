import { createSlice } from "@reduxjs/toolkit";
import { addNewCounter } from "../api";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        countLabel: "L"
    },
    reducers: {
        kill: (state) => {
            state.count += 1
            state.loading = true
        },
        killed: (state) => {
            state.count -= 1
            state.loading = false
        },
        multi_kill: (state, action) => {
            console.log(action.type)
            state.count += action.payload.count
            state.countLabel = action.payload.label
        }
    },
    extraReducers: (builders) => {
        builders.addCase(addNewCounter.fulfilled, (state, action) => {
            state.loading = false
            state.countLabel = JSON.stringify(action.payload)
        }).addCase(addNewCounter.pending, (state) => {
            state.loading = true
        })
    }
})

export const { kill, killed, multi_kill } = counterSlice.actions

export default counterSlice.reducer