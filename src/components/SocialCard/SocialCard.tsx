import React, { FC } from 'react';

/** Social card for appliaction */
export const SocialCard: FC = (props) => {
	const {
		id,
		img,
		body,
	} = props;

	return (
		<section class={`card ${id} bg-transparent text-light border-0`}>
			<picture>
				<img src={img.src} alt={img.alt} class="card-img" loading="lazy" />
			</picture>

			<div class="card-body">
				<h5 class="card-title">{body.title}</h5>

				<p class="card-text">{body.text}</p>
				
				<a href={body.link.href} class="btn btn-block btn-light">{body.link.caption}</a>
			</div>
		</section>
	);
};
