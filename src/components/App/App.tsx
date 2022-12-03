import React, { FC } from 'react';
import { Provider } from "react-redux";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { mainStore } from '../../redux';

/** Main App component */
export const App: FC = () => (
	<Provider store={mainStore}>
		<Header />

		<Main />

		<Footer />
	</Provider>
);
