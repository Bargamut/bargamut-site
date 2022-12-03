import { configureStore } from '@reduxjs/toolkit';
import commenContentReducer from './slices/commonContent';
import navigationReducer from './slices/navigation';
import socialsReducer from './slices/socials';

/** Main store of the application */
export const mainStore = configureStore({
	reducer: {
		commenContent: commenContentReducer,
		navigation: navigationReducer,
		socials: socialsReducer,
	}
});

/** Main store type */
export type TMainStore = ReturnType<typeof mainStore.getState>;
