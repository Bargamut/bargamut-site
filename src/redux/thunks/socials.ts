import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchSocialItems } from "../../api/requests/socials/fetchSocialItems";

/** Thunk fetcher for social items */
export const thunkFetchSocialItems = createAsyncThunk('navigation/fetchSocialItems', async (_params, _thunkAPI) => await fetchSocialItems());