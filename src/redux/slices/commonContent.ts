import { createSlice } from "@reduxjs/toolkit";
import { thunkFetchCommonContent } from "../thunks/commonContent";

// NOTE: This is just for test. Going to be fetch directly from server

const commonContentSlice = createSlice({
	name: 'commonContent',
	initialState: {
		sitename: 'Sitename',
		copyright: 'Copyright text',
	},
	reducers: {
		commonContentLoaded(_state, action) {
			// Yes, we can set just by equal because Immer. This is for example.
			return { ...action.payload };
		},
	},
	extraReducers(builder) {
		builder.addCase(thunkFetchCommonContent.fulfilled, (_state, action) => {
			return action.payload;
		})
	},
});

export const { commonContentLoaded } = commonContentSlice.actions;

export default commonContentSlice.reducer;