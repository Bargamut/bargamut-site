import React, { FC } from 'react';
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";

/** Main App component */
export const App: FC = () => (
	<>
		<Header />
		<Main />
		<Footer />
	</>
);
