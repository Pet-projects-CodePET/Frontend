import Link from 'next/link';

import styles from './logo.module.scss';

export function Logo({ children }: { children: React.ReactNode }) {
	return (
		<Link href="/" className={styles.link}>
			{children}
		</Link>
	);
}
