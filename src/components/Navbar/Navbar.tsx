import React, { FC, useState } from "react";
import { TNavigationItem } from "../../types/navigationTypes";
// import { sitename, navbarItems } from "../stores.js";
import { NavItem } from "../NavItem/NavItem";

/** Navigation bar for application */
export const NavBar: FC = () => {
	// const sitename = useSelector(siteStore);
	// const navbarItems = useSelector(navbarStore);
	const sitename = 'use siteStore';
	const navbarItems: TNavigationItem[] = [];

	const [isNavbarVisible, setNavbarVisibility] = useState(false);;

	const handleClickMenuToggler = () => setNavbarVisibility(!isNavbarVisible);

	return (
		<nav className="navbar navbar-dark">
			<a className="navbar-brand" href="/">{sitename}</a>
			
			<button className="navbar-toggler" type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded={isNavbarVisible}
				aria-label="Toggle navigation"
				onClick={handleClickMenuToggler}
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			
			{isNavbarVisible && (
				<div className="collapse navbar-collapse show" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						{navbarItems.map((item) => (
							<NavItem {...item} />
						))}
					</ul>
				</div>
			)}
		</nav>
	);
};
