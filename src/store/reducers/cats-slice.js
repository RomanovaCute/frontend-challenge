import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	cats: [],
	isLoading: false,
	error: "",
}

export const catsSlice = createSlice({
	name: "cats",
	initialState,
	reducers: {
		catsFetching: (state, action) => {
			state.isLoading = true
		},
		catsFetchingSuccess: (state, action) => {
			state.cats = action.payload
			state.isLoading = false
			state.error = ""
		},
		catsFetchingError: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export default catsSlice.reducer