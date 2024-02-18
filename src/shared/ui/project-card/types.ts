interface ITag {
	text: string;
	color: string;
}

interface ICard {
	date: string;
	title: string;
	direction: string;
	tags: Array<ITag>;
	link: string;
}

interface ICards extends Array<ICard> {}
