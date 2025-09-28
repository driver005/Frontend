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
				key: 'nextcloud',
				imgUrl: nextcloud,
				href: 'https://tcloud.sfz-tuebingen.org/index.php/login',
			},
		},
	},
	{
		Card: {
			Cardelement1: {
				key: 'wordpress',
				imgUrl: wordPress,
				href: 'https://hub.sfz-tuebingen.org/admin',
			},
		},
	},
	{
		Card: {
			Cardelement1: {
				key: 'discord',
				imgUrl: discord,
				href: 'https://discord.gg/9Mxt3e6mK5',
			},
		},
	},
	{
		Card: {
			Cardelement1: {
				key: 'bwki',
				imgUrl: bwki,
				href: 'https://www.bw-ki.de/',
			},
		},
	},
	{
		Card: {
			Cardelement1: {
				key: 'vdi',
				imgUrl: vdi,
				href: 'https://www.vdi.de/',
			},
		},
	},
	{
		Card: {
			Cardelement1: {
				key: 'wildermuth',
				imgUrl: wildermuth,
				href: 'https://www.wildermuth-gymnasium.de/',
			},
		},
	},
];
