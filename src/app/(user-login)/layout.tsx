import { LoginLayout } from '@/shared/layouts';

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <LoginLayout>{children}</LoginLayout>;
}
