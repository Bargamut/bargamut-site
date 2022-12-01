import { configureStore } from '@reduxjs/toolkit';
import commenContentReducer from './commonContent';
import navigationReducer from './navigation';
import socialsReducer from './socials';

export const mainStore = configureStore({
	reducer: {
		commenContent: commenContentReducer,
		navigation: navigationReducer,
		socials: socialsReducer,
	}
});
