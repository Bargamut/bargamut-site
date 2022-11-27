import React, { FC } from "react";
import { TNavigationItem } from "../../types/navigationTypes";

type TProps = TNavigationItem;

/** Navigation item for application */
export const NavItem: FC<TProps> = (props) => {
	const { isActive, caption, link } = props;

	return (
		<li className={`nav-item ${isActive && 'active' || ''}`}>
			<a className="nav-link" href={link}>
				{caption}

				{isActive && (
					<span className="sr-only">current</span>
				)}
			</a>
		</li>
	);
};
