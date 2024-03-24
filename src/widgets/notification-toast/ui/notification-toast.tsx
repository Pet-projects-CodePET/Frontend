'use client';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "react-toastify/dist/ReactToastify.minimal.css";
import styles from './notification-toast.module.scss';
import { NotificationBanner } from '@/shared/ui';

// enum NotificationStatusKeys {
// 	pending = 'pending',
// 	error = 'error',
// 	success = 'success',
// }

// type NotificationPropsType = {
// 	// status: 'pending'||'error'||'success';
// 	status: typeof NotificationStatusKeys;
// 	title: string;
// 	subtitle: string;
// };

export const NotificationExample = () =>
	// { status: NotificationProps ,
	// title,
	// subtitle,}
	{
		const notifySuccess = () =>
			toast(
				NotificationBanner({
					status: 'success',
					title: 'Пользователь зарегистрирован',
					subtitle: 'Проверьте почту!',
				}),
				{
					icon: false,
					className: styles.container,
					bodyClassName: styles.bodyClassNameTest,
					progressClassName: 'fancy-progress-bar',
				}
			);

		const notifyError = () =>
			toast.error(
				'Невозможно войти с предоставленными учетными данными.Невозможно войти с предоставленными учетными данными.Невозможно войти с предоставленными учетными данными.Невозможно войти с предоставленными учетными данными.'
			);

		return (
			<div>
				<button
					onClick={notifySuccess}
					style={{
						width: '200px',
						height: '30px',
						background: 'green',
						borderRadius: '10px',
					}}>
					YES
				</button>
				<button
					onClick={notifyError}
					style={{
						width: '200px',
						height: '30px',
						background: 'red',
						borderRadius: '10px',
						// border-radius: '10px'
					}}>
					NO
				</button>
				<ToastContainer
					className={styles.container}
					toastClassName={styles.bodyClassNameTest}
					// limit={1}	
					// bodyClassName: "grow-font-size",
					autoClose={false}
					icon={false}
					closeButton={false}
				/>
			</div>
		);
	};
