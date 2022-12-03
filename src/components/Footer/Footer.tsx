import React, { FC } from "react";
import { useSelector } from "react-redux";
import { TMainStore } from "../../redux";
import "./styles.css";

/** Footer component */
export const Footer: FC = () => {
	const footerText = useSelector((state: TMainStore) => state.commenContent.footer);
	
	return (
		<footer className="bg-dark-overrided">
			<section className="container text-muted">
				{footerText}

				<img src="https://www.codewars.com/users/bargamut/badges/micro" />
			</section>
		</footer>
	);
};
