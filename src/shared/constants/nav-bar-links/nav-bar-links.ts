type NavLink = {
    id: number,
     label: string, 
     path: string
    }

export const navBarLinksArray: Array<NavLink> = [
	{
		id: 0,
		label: 'Проекты',
		path: '/projects',		
	},
	{
		id: 1,
		label: 'Специалисты',
		path: '/specialists',		
	},
	{
		id: 2,
		label: 'О нас',
		path: '/about-us',	
	},
];

