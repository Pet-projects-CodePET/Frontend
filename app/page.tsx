'use client';

import { MainPage } from '@/sitePages';
import Form from '@/shared/ui/form/form';

export default function Home() {
	const handleSubmit = () => console.log('работает');

	return (
		<>
			<MainPage />
			<Form onSubmit={handleSubmit}>
				<p>Привет</p>
				<input />
			</Form>
		</>
	);
}
