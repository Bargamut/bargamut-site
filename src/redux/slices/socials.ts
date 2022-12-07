import { createSlice } from "@reduxjs/toolkit";
import { thunkFetchSocialItems } from "../thunks/socials";

// NOTE: This is just for test. Going to be fetch directly from server

const socialsSlice = createSlice({
	name: 'socials',
	initialState: {
		items: [
			{
				id: 'initial',
				img: {
					src: '#',
					alt: 'Initial img',
				},
				body: {
					title: 'Title',
					text: 'Text',
					link: {
						href: '#',
						caption: 'Link',
					},
				},
			},
		],
	},
	reducers: {
		setContent(state, action) {
			state = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(thunkFetchSocialItems.fulfilled, (state, action) => {
			state.items = action.payload;
		})
	},
});

export const { setContent } = socialsSlice.actions;

export default socialsSlice.reducer;