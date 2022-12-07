import { configureStore } from '@reduxjs/toolkit';
import commonContentReducer from './slices/commonContent';
import navigationReducer from './slices/navigation';
import socialsReducer from './slices/socials';

/** Main store of the application */
export const mainStore = configureStore({
	reducer: {
		commonContent: commonContentReducer,
		navigation: navigationReducer,
		socials: socialsReducer,
	}
});

/** Main store type */
export type TMainStore = ReturnType<typeof mainStore.getState>;

export type TMainStoreDispatch = typeof mainStore.dispatch;