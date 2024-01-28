import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'CodePET',
	description:
		'CodePET - это веб-приложение, разработанное для поиска, организации и управления пет-проектами в области разработки программного обеспечения. Оно предназначено для выпускников школ программирования, которые хотят получить практический опыт и совершенствовать свои навыки путем участия в реальных проектах. А также оно будет интересно для опытных разработчиков которые хотят реализовать что-то новое, для менеджеров проектов и для компаний которые хотят создать тестовое МВП нового продукта.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
