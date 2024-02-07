import Link from 'next/link';
import Image from 'next/image';
import styles from './logo.module.scss';

export function Logo({ logoImage }: { logoImage: string }) {
	return (
		<Link href="/" className={styles.link}>
			<Image className={styles.logo} src={logoImage} alt="logo" />
		</Link>
	);
}
