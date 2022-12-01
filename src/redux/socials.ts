import { createSlice } from "@reduxjs/toolkit";

// NOTE: This is just for test. Going to be fetch directly from server

const socialsSlice = createSlice({
	name: 'socials',
	initialState: {},
	reducers: {
		setContent(state, action) {
			state = action.payload;
		},
	},
});

export const { setContent } = socialsSlice.actions;

export default socialsSlice.reducer;