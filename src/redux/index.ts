import { configureStore } from '@reduxjs/toolkit';
import commenContentReducer from './slices/commonContent';
import navigationReducer from './slices/navigation';
import socialsReducer from './slices/socials';

export const mainStore = configureStore({
	reducer: {
		commenContent: commenContentReducer,
		navigation: navigationReducer,
		socials: socialsReducer,
	}
});
