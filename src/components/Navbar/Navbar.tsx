import React, { FC, useState } from "react";
import { useSelector } from 'react-redux';
import { TMainStore } from "../../redux";
import { TNavigationItem } from "../../types/navigationTypes";
import { NavItem } from "../NavItem/NavItem";

/** Navigation bar for application */
export const NavBar: FC = () => {
	const sitename = useSelector((state: TMainStore) => state.commenContent.sitename);
	const navbarItems: TNavigationItem[] = useSelector((state: TMainStore) => state.navigation.menuItems);

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
