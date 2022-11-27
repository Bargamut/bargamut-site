import React, { VFC } from "react";
// import { socials } from "../stores.js";
import { SocialCard } from "../SocialCard/SocialCard";
// import styles from "./styles.css";

export const Main: VFC = () => {
	// const socials = useSelector(socialsStore);
	const socials: Record<string, unknown>[] = [];

	return (
		<main class="container">
			<section class="card-deck">
				{socials.map((socialItem) => (
					<SocialCard {...socialItem} />
				))}
			</section>
		</main>
	);
};
