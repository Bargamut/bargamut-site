import { createSlice } from "@reduxjs/toolkit";

// NOTE: This is just for test. Going to be fetch directly from server

const commonContentSlice = createSlice({
	name: 'commonContent',
	initialState: {},
	reducers: {
		commonContentLoaded(_state, action) {
			return { ...action.payload }; // Yes, we can set just by equal because Immer. This is for example.
		},
	},
});

export const { commonContentLoaded } = commonContentSlice.actions;

export default commonContentSlice.reducer;