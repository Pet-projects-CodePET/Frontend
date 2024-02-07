import { Logo } from '@/shared/ui/logo/logo';
import logo from '@/shared/assets/images/logo-var-3.svg';
import styles from './loginLayout.module.scss';
export function LoginLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Logo logoImage={logo} />
				</div>

				{children}
			</div>
		</>
	);
}
