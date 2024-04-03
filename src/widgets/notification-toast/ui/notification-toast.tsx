'use client';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './notification-toast.module.scss';
import { NotificationBanner } from '@/shared/ui';

enum NotificationStatusKeys {
	// pending = 'pending',
	error = 'error',
	success = 'success',
}

type NotificationPropsType = {
	status: keyof typeof NotificationStatusKeys;
	title: string;
	subtitle?: string;
};

type HandleResizeType = () => void;

export const toaster = ({ status, title, subtitle }: NotificationPropsType) =>
	toast(
		NotificationBanner({
			status,
			title,
			subtitle,
		})
	);
export const NotificationToastContainer = () => {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		const handleResize: HandleResizeType = () => {
			if (typeof window !== 'undefined') {
				setWidth(window.innerWidth);
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			{width < 780 ? (
				<ToastContainer
					className={styles.container}
					toastClassName={styles.body}
					autoClose={5000}
					icon={false}
					closeButton={true}
					hideProgressBar={true}
					position="top-center"
				/>
			) : (
				<ToastContainer
					className={styles.container}
					toastClassName={styles.body}
					autoClose={5000}
					icon={false}
					closeButton={true}
					hideProgressBar={true}
					position="bottom-right"
				/>
			)}
		</>
	);
};
