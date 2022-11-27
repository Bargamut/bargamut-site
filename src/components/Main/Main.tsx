import React, { FC } from "react";
import { ICard } from "../../types/cardTypes";
// import { socials } from "../stores.js";
import { SocialCard } from "../SocialCard/SocialCard";

/** Main component of application */
export const Main: FC = () => {
	// const socials = useSelector(socialsStore);
	const socials: ICard[] = [];

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
