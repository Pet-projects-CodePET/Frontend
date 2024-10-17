export const getAllProjects = ({ currentPage }: { currentPage: number }) => {
	const res = fetch(
		`https://devcodepet.tw1.ru/api/v1/projects/?page=${currentPage}`,
		{ cache: 'no-cache', next: { revalidate: 0 } }
	);
	return res;
};
