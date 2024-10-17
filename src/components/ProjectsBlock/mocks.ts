import tourCompass from './../../assets/img/tour-compass.png';
import hotel from './../../assets/img/hotel.png';
import { ReactComponent as Analytics } from '@svg/analytics.svg';
import { ReactComponent as Design } from '@svg/design.svg';
import { ReactComponent as Laptop } from '@svg/laptop.svg';
import { ReactComponent as Proto } from '@svg/proto.svg';
import { ReactComponent as Star } from '@svg/star.svg';
import { ReactComponent as Voice } from '@svg/voice.svg';

export const ProjectsInfo = [
	{
		image: tourCompass,
		date: 'В разработке',
		title: 'Сайт для путешественников «Tour compass»',
		info: [
			{
				Icon: Analytics,
				text: 'аналитика',
			},
			{
				Icon: Star,
				text: 'фирменный стиль',
			},
			{
				Icon: Proto,
				text: 'прототипирование',
			},
			{
				Icon: Design,
				text: 'дизайн',
			},
			{
				Icon: Laptop,
				text: 'верстка',
			},
			{
				Icon: Voice,
				text: 'продвижение',
			},
		],
		url: 'https://tour-compass.com',
	},
	{
		image: hotel,
		date: '21/10/2023 - 10/11/2023',
		title: 'Сайт отеля «Счастье»',
		info: [
			{
				Icon: Analytics,
				text: 'аналитика',
			},
			{
				Icon: Star,
				text: 'фирменный стиль',
			},
			{
				Icon: Proto,
				text: 'прототипирование',
			},
			{
				Icon: Design,
				text: 'дизайн',
			},
			{
				Icon: Laptop,
				text: 'верстка',
			},
			{
				Icon: Voice,
				text: 'продвижение',
			},
		],
		url: 'https://отель-счастье.рф',
	},
];
