import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { TMainStoreDispatch } from "../../redux";
import { selectSocialsItems } from "../../redux/selectors/socials";
import { thunkFetchSocialItems } from "../../redux/thunks/socials";
import { SocialCard } from "../SocialCard/SocialCard";

/** Main component of application */
export const Main: FC = () => {
	const socials = useSelector(selectSocialsItems);

	const dispatch = useDispatch<TMainStoreDispatch>();

	useEffect(() => {
		dispatch(thunkFetchSocialItems());
	}, []);

	return (
		<main className="container">
			<section className="card-deck">
				{socials.map((socialItem) => (
					<SocialCard key={`socialCard_${socialItem.id}`} {...socialItem} />
				))}
			</section>
		</main>
	);
};
