import { configureStore } from "@reduxjs/toolkit";
import adminReducer from './adminSlice';
import classReducer from './classSlice';

const store = configureStore({
	reducer: {
		admin: adminReducer,
		class: classReducer
	}
});

export default store;