import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectFooterText } from "../../redux/selectors/commonContent";
import "./styles.css";

/** Footer component */
export const Footer: FC = () => {
	const footerText = useSelector(selectFooterText);
	
	return (
		<footer className="bg-dark-overrided">
			<section className="container text-muted">
				{footerText}

				<img src="https://www.codewars.com/users/bargamut/badges/micro" />
			</section>
		</footer>
	);
};
