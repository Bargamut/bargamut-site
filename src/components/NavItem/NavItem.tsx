import React, { FC } from "react";

/** Navigation item for application */
export const NavItem:FC = (props) => {
	const {
		isActive,
		caption,
		link,
	} = props;

	return (
		<li class={`nav-item ${isActive && 'active' || ''}`}>
			<a class="nav-link" href={link}>
				{caption}

				{isActive && (
					<span class="sr-only">current</span>
				)}
			</a>
		</li>
	);
};
