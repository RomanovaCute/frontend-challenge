import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	cats: [],
	isLoading: true,
}

export const catsSlice = createSlice({
	name: "cats",
	initialState,
	reducers: {
		fetching: (state, action) => {
			state.isLoading = true
		},
		fetchingSuccess: (state, action) => {
			state.cats = action.payload
			state.isLoading = false
			state.error = ""
		}
	}
})

export default catsSlice.reducer