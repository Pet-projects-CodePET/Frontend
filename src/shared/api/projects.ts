export const getAllProjects = ({ currentPage }: { currentPage: number }) => {
	function setHeaders(headers: { 'Content-Type': string }) {
		if (accessToken) {
			return {
				...headers,
				Authorization: `Token ${accessToken}`,
			};
		} else {
			return headers;
		}
	}
	const accessToken = localStorage.getItem('token');
	const res = fetch(
		`https://devcodepet.tw1.ru/api/v1/projects/?page=${currentPage}`,
		{
			cache: 'no-cache',
			next: { revalidate: 0 },
			headers: setHeaders({
				'Content-Type': 'application/json',
			}),
		}
	);
	return res;
};
