import React, { FC } from "react";
import { useSelector } from "react-redux";
import { TMainStore } from "../../redux";
import { ICard } from "../../types/cardTypes";
import { SocialCard } from "../SocialCard/SocialCard";

/** Main component of application */
export const Main: FC = () => {
	const socials: ICard[] = useSelector((state: TMainStore) => state.socials.items);

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
