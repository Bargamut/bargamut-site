import { createSelector } from "@reduxjs/toolkit";
import { TMainStore } from "../index";

const selectStatePart = (state: TMainStore) => state.navigation;

/** Select navigation menu items */
export const selectNavigationMenuItems = createSelector(selectStatePart, (state) => state.menuItems);
