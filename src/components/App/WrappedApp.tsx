import React, { FC, useEffect } from 'react';
import { Provider, useDispatch } from "react-redux";
import { mainStore, TMainStoreDispatch } from '../../redux';
import { thunkFetchCommonContent } from '../../redux/thunks/commonContent';
import { App } from './App';

/** Main App component */
export const WrappedApp: FC = () => {
	return (
		<Provider store={mainStore}>
			<App />
		</Provider>
	);
};
