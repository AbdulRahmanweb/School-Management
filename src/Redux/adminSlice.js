import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	admin: JSON.parse(localStorage.getItem("admin")) || null,
	school: JSON.parse(localStorage.getItem("school")) || null,
}

const adminSlice = createSlice({
	name: "admin",
	initialState,
	reducers: {
		createSchool: (state, action) => {
			state.admin = action.payload.admin;
			state.school = action.payload.school;
			localStorage.setItem("admin", JSON.stringify(state.admin));
			localStorage.setItem("school", JSON.stringify(state.school));
		},
		logOutAdmin: (state, action) => {
			state.admin = null;
			state.school = null;
			localStorage.removeItem("admin");
			localStorage.removeItem("school");
		}
	}
});

export const { createSchool, logOutAdmin } = adminSlice.actions;
export default adminSlice.reducer;
