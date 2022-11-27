import React, { VFC } from 'react';
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";

/** Main App component */
export const App: VFC = () => (
	<>
		<Header />
		<Main />
		<Footer />
	</>
);
