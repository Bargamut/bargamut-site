/** Link type */
type TLink = {
	caption: string;
	href: string;
};

/** Card data */
export interface ICard {
	id: string,
	img: Pick<HTMLImageElement, 'src' | 'alt'>,
	body: {
		title: string;
		text: string;
		link: TLink;
	};
}
