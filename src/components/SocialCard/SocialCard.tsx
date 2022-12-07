import React, { FC } from 'react';
import { ICard } from '../../types/cardTypes';

type TProps = ICard;

/** Social card for application */
export const SocialCard: FC<TProps> = (props) => {
	const { id, img, body } = props;

	return (
		<section className={`card ${id} bg-transparent text-light border-0`}>
			<picture>
				<img src={img.src} alt={img.alt} className="card-img" loading="lazy" />
			</picture>

			<div className="card-body">
				<h5 className="card-title">{body.title}</h5>

				<p className="card-text">{body.text}</p>
				
				<a href={body.link.href} className="btn btn-block btn-light">{body.link.caption}</a>
			</div>
		</section>
	);
};
