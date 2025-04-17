import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	classes: JSON.parse(localStorage.getItem("classes")) || []
}

const classSlice = createSlice({
	name: "class",
	initialState,
	reducers: {
		addClass: (state, action) => {
			state.classes.push(action.payload);
			localStorage.setItem("classes", JSON.stringify(state.classes));
		},

		deleteClass: (state, action) => {
			state.classes = state.classes.filter((clas) => clas.id !== action.payload);
			localStorage.setItem("classes", JSON.stringify(state.classes));
		}
	}
});

export const { addClass, deleteClass } = classSlice.actions;
export default classSlice.reducer;