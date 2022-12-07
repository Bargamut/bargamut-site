import { createSelector } from "@reduxjs/toolkit";
import { TMainStore } from "../index";

const selectStatePart = (state: TMainStore) => state.commonContent;

/** Select copyright text */
export const selectCopyrightText = createSelector(selectStatePart, (state) => state.copyright);

/** Select sitename text */
export const selectSitename = createSelector(selectStatePart, (state) => state.sitename);
