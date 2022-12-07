import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchNavigationItems } from "../../api/requests/navigation/fetchNavigationItems";

/** Thunk fetcher for navigation items */
export const thunkFetchNavigationItems = createAsyncThunk('navigation/fetchNavigationItems', async (_params, _thunkAPI) => await fetchNavigationItems());