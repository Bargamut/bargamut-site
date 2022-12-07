import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectSocialsItems } from "../../redux/selectors/socials";
import { SocialCard } from "../SocialCard/SocialCard";

/** Main component of application */
export const Main: FC = () => {
	const socials = useSelector(selectSocialsItems);

	return (
		<main className="container">
			<section className="card-deck">
				{socials.map((socialItem) => (
					<SocialCard {...socialItem} />
				))}
			</section>
		</main>
	);
};
