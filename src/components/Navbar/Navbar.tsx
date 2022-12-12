import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { TMainStoreDispatch } from "../../redux";
import { selectSitename } from "../../redux/selectors/commonContent";
import { selectNavigationMenuItems } from "../../redux/selectors/navigation";
import { thunkFetchNavigationItems } from "../../redux/thunks/navigation";
import { NavItem } from "../NavItem/NavItem";

/** Navigation bar for application */
export const NavBar: FC = () => {
	const dispatch = useDispatch<TMainStoreDispatch>();

	const sitename = useSelector(selectSitename);
	const navbarItems = useSelector(selectNavigationMenuItems);

	const [isNavbarVisible, setNavbarVisibility] = useState(false);

	useEffect(() => {
		dispatch(thunkFetchNavigationItems());
	}, []);

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
