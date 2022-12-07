import React, { FC, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { TMainStoreDispatch } from '../../redux';
import { thunkFetchCommonContent } from '../../redux/thunks/commonContent';

/** Main App component */
export const App: FC = () => {
	const dispatch = useDispatch<TMainStoreDispatch>();

	useEffect(() => {
		dispatch(thunkFetchCommonContent());
	}, []);

	return (
		<>
			<Header />

			<Main />

			<Footer />
		</>
	);
};
