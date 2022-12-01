import React, { FC } from "react";
import "./styles.css";

/** Footer component */
export const Footer: FC = () => {
	const footerText = 'commonContent.footer'; // useSelector(commonContentStore);
	
	return (
	<footer className="bg-dark-overrided">
		<section className="container text-muted">
			{footerText}

			<img src="https://www.codewars.com/users/bargamut/badges/micro" />
		</section>
	</footer>
);};
