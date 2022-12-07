import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCommonContent } from "../../api/requests/commonContent/fetchCommonContent";

/** Thunk fetcher for common content */
export const thunkFetchCommonContent = createAsyncThunk('commonContent/fetchCommonContent', async (_params, _thunkAPI) => await fetchCommonContent());