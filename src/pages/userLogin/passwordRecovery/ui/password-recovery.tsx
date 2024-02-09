import { FormPasswordRecovery } from '@/features/ui/form-password-recovery/form-password-recovery';
import styles from './passwordRecovery.module.scss';

export function PasswordRecovery() {
	return (
		<div className={styles.container}>
			<FormPasswordRecovery />
		</div>
	);
}
