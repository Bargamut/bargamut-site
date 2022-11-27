/** Link type */
type TLink = {
	caption: string;
	href: string;
};

/** Card data */
export interface ICard {
	id: string,
	img: HTMLImageElement,
	body: {
		title: string;
		text: string;
		link: TLink;
	};
}
