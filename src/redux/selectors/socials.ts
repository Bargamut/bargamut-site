import { createSelector } from "@reduxjs/toolkit";
import { TMainStore } from "../index";

const selectStatePart = (state: TMainStore) => state.socials;

/** Select socials items */
export const selectSocialsItems = createSelector(selectStatePart, (state) => state.items);
