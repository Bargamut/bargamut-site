import { createSlice } from "@reduxjs/toolkit";

// NOTE: This is just for test. Going to be fetch directly from server

const navigationSlice = createSlice({
	name: 'navigation',
	initialState: {
		menuItems: [
			{
				link: '/',
				caption: 'Initial menu item',
			},
		],
},
	reducers: {
		setContent(state, action) {
			state = action.payload;
		},
	},
});

export const { setContent } = navigationSlice.actions;

export default navigationSlice.reducer;