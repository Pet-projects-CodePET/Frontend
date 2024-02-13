import LogoIcon from '@/shared/assets/images/logo-var-3.svg';
import styles from './loginLayout.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export function LoginLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<Link href='/'>
					<LogoIcon className={styles.logo__icon}/>
				</Link>
			</div>

			{children}
		</div>
	);
}
