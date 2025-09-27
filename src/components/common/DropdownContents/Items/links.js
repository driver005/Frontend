import discord from '../../../common/images/discord.svg';
import bwki from '../../../common/images/bwki.png';
import wildermuth from '../../../common/images/wildermuth.jpg';
import vdi from '../../../common/images/VDI.png';
import nextcloud from '../../../common/images/nextcloud.png';
import wordPress from '../../../common/images/wordPress.png';

export const MenuItemsLinks = [
	{
		Card: {
			Cardelement1: {
				name: 'Join our Nextcloud',
				detail: 'Click and learn',
				imgUrl: nextcloud,
				href: 'https://tcloud.sfz-tuebingen.org/index.php/login',
			},
		},
	},
	{
		Card: {
			Cardelement1: {
				name: 'Join our Wordpress',
				detail: 'Click and learn',
				imgUrl: wordPress,
				href: 'https://hub.sfz-tuebingen.org/admin',
			},
		},
	},
	{
		Card: {
			Cardelement1: {
				name: 'Join our Discord',
				detail: 'Click and learn',
				imgUrl: discord,
				href: 'https://discord.gg/9Mxt3e6mK5',
			},
		},
	},
	{
		Card: {
			Cardelement1: {
				name: 'Check out Bw-Ki',
				detail: 'Click and learn',
				imgUrl: bwki,
				href: 'https://www.bw-ki.de/',
			},
		},
	},
	{
		Card: {
			Cardelement1: {
				name: 'Check out VDI',
				detail: 'Click and learn',
				imgUrl: vdi,
				href: 'https://www.vdi.de/',
			},
		},
	},
	{
		Card: {
			Cardelement1: {
				name: 'Check out our Home',
				detail: 'Click and learn',
				imgUrl: wildermuth,
				href: 'https://www.wildermuth-gymnasium.de/',
			},
		},
	},
];
