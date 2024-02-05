import Logo from '@/app/ui/logo';
import logo from '@/images/logo-var-3.svg';
import styles from '@/app/(user-login)/layoutLogin.module.scss';
export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className={styles.login__container}>
				<div className={styles.login__logo}>
					<Logo logoImage={logo} />
				</div>

				{children}

			</div>
		</>
	);
}
