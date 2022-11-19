import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   favorite: []
}

export const favoriteSlice = createSlice({
	name: "choose",
	initialState,
	reducers: {
		chooseCat(state, action) {
			state.favorite.push(action.payload)
		},
		removeCat(state, action) {
			state.favorite = state.favorite.filter(
				(item) => item.id !== action.payload
			)
		},
	},
})

export const { chooseCat, removeCat } = favoriteSlice.actions
export default favoriteSlice.reducer