import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/ui/logo.module.scss';

export default function Logo({ logoImage }: { logoImage: string }) {
	return (
		<Link href="/" className={styles.logo__link}>
			<Image className={styles.logo} src={logoImage} alt="logo" />
		</Link>
	);
}
