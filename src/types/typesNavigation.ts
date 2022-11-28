import { TDictionaryItem } from "./baseTypes";

/** Navigation item type */
export type TNavigationItem = TDictionaryItem & { isActive?: boolean; };