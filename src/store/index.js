import { configureStore, combineReducers } from "@reduxjs/toolkit";
import catsSlice from "./reducers/cats-slice";
import favoriteSlice  from "./reducers/favorite-slice";

const rootReducer = combineReducers({
	catsSlice,
	favoriteSlice,
})
export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
	})
}