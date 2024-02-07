// TODO: Put it into DB (Mongo / PostgrSQL + GQL)

import logoVK from "../assets/decor/logos/vk.png";
import logoTelegram from "../assets/decor/logos/telegram.svg";
import { TDictionaryItem } from "../types/baseTypes";

type TCommonContent = {
	sitename: string;
	copyright: string;
};

/** @readonly */
export const commonContent: TCommonContent = {
	sitename: 'Bargamut',
	copyright: `Paul "Bargamut" Petrov. All rights reserved.`,
};

/** @readonly */
export const navbarItems: TDictionaryItem[] = [
	{
		value: '/',
		label: 'Home',
	},
	{
		value: 'https://xplore.games/',
		label: 'XP•LORE Games',
	},
];

/** @readonly */
export const socials = [
	{
		id: 'vk',
		img: {
			src: logoVK,
			alt: 'VK logo',
		},
		body: {
			title: 'ВКонтакте',
			text: 'Здесь меня можно найти во ВКонтакте',
			link: {
				href: 'https://vk.bargamut.ru/',
				caption: 'Найти',
			}
		}
	},
	{
		id: 'tg',
		img: {
			src: logoTelegram,
			alt: 'Telegram logo',
		},
		body: {
			title: 'Telegram',
			text: 'Здесь меня можно найти в Телеграме',
			link: {
				href: 'https://t.me/bargamut',
				caption: 'Найти',
			}
		}
	},
	/**
	 * @deprecated Blocked in Russia :(
	 
	{
		id: 'fb',
		img: {
			src: logoFB,
			alt: 'Facebook logo',
		},
		body: {
			title: 'Facebook',
			text: 'Здесь меня можно найти в Facebook',
			link: {
				href: 'https://fb.bargamut.ru',
				caption: 'Найти',
			}
		}
	},
	{
		id: 'instagram',
		img: {
			src: '/assets/decor/logos/instagram.svg',
			alt: 'Instagram logo',
		},
		body: {
			title: 'Instagram',
			text: 'Здесь меня можно найти в Instagram',
			link: {
				href: 'https://instagram.bargamut.ru',
				caption: 'Найти',
			}
		}
	},
	{
		id: 'twitter',
		img: {
			src: '/assets/decor/logos/twitter.svg',
			alt: 'Twitter logo',
		},
		body: {
			title: 'Twitter',
			text: 'Здесь меня можно найти в Twitter',
			link: {
				href: 'https://twitter.bargamut.ru',
				caption: 'Найти',
			}
		}
	},

	*/
];