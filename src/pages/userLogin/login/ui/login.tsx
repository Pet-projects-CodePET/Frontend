import styles from './login.module.scss';
import Form from '@/shared/ui/form/form';

export function Login() {
	const handleSubmit = () => console.log('Форма входа отправляет запрос');

	return (
		<div className={styles.container}>
			<Form onSubmit={handleSubmit}>Форма входа</Form>
		</div>
	);
}
