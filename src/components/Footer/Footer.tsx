import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectCopyrightText } from "../../redux/selectors/commonContent";
import "./styles.css";

/** Footer component */
export const Footer: FC = () => {
	const copyright = useSelector(selectCopyrightText);
	
	return (
		<footer className="bg-dark-overrided">
			<section className="container text-muted">
				&copy; {(new Date()).getFullYear()} {copyright}

				<img src="https://www.codewars.com/users/bargamut/badges/micro" />
			</section>
		</footer>
	);
};
