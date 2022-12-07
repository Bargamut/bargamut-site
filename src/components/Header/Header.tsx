import React, { FC } from "react";
import { NavBar } from "../Navbar/Navbar";
import "./styles.css";

/** Header component */
export const Header: FC = () => (
	<header className="bg-dark-overrided">
		<section className="container">
			<NavBar />
		</section>
	</header>
);
