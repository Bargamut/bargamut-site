import { createSelector } from "@reduxjs/toolkit";
import { TMainStore } from "../index";

const selectStatePart = (state: TMainStore) => state.commonContent;

/** Select footer text */
export const selectFooterText = createSelector(selectStatePart, (state) => state.footer);

/** Select sitename text */
export const selectSitename = createSelector(selectStatePart, (state) => state.sitename);
