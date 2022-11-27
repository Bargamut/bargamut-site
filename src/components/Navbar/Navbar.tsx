import React, { VFC, useState } from "react";
// import { sitename, navbarItems } from "../stores.js";
// import { fade } from "svelte/transition";
import { NavItem } from "../NavItem/NavItem";

/** Navigation bar for application */
export const NavBar: VFC = () => {
	// const sitename = useSelector(siteStore);
	// const navbarItems = useSelector(navbarStore);
	const sitename = 'use siteStore';
	const navbarItems: Record<string, unknown>[] = [];

	const [isNavbarVisible, setNavbarVisibility] = useState(false);;

	const handleClickMenuToggler = () => setNavbarVisibility(!isNavbarVisible);

	return (
		<nav class="navbar navbar-dark">
			<a class="navbar-brand" href="/">{sitename}</a>
			
			<button class="navbar-toggler" type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="{isNavbarVisible}"
				aria-label="Toggle navigation"
				onClick={handleClickMenuToggler}
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			
			{isNavbarVisible && (
				<div class="collapse navbar-collapse show" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
						{navbarItems.map((item) => (
							<NavItem {...item} />
						))}
					</ul>
				</div>
			)}
		</nav>
	);
};
