import { createSlice } from "@reduxjs/toolkit";
import { thunkFetchNavigationItems } from "../thunks/navigation";

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
	extraReducers(builder) {
		builder.addCase(thunkFetchNavigationItems.fulfilled, (state, action) => {
			state.menuItems = action.payload.map((item) => ({
				link: item.value,
				caption: item.label,
			}));
		})
	},
});

export const { setContent } = navigationSlice.actions;

export default navigationSlice.reducer;