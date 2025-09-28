import discord from '../../../common/images/discord.svg';
import nextcloud from '../../../common/images/nextcloud.png';
import wordPress from '../../../common/images/wordPress.png';

export const MenuItemsInternalLinks = [
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
];
