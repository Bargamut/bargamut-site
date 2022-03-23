import { readable } from 'svelte/store';

export const sitename = readable('Bargamut');

export const navbarItems = readable([
	{
		isActive: true,
		link: '/',
		caption: 'Home',
	},
	{
		isActive: true,
		link: 'https://ancientlores.com/',
		caption: 'Ancient Lores | Сказания древности',
	},
]);

export const socials = readable([
	{
		id: 'vk',
		img: {
			src: '/assets/decor/logos/vk.png',
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
			src: '/assets/decor/logos/telegram.png',
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
	 * @deprecated Via blocked in Russia :(
	 
	{
		id: 'fb',
		img: {
			src: '/assets/decor/logos/fb.jpg',
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
]);