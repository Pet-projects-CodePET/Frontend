'use client';
import React from 'react';
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

export const toaster = ({ status, title, subtitle }: NotificationPropsType) =>
	toast(
		NotificationBanner({
			status,
			title,
			subtitle,
		})
	);
export const NotificationToastContainer = () => {
	return (
		<ToastContainer
			className={styles.container}
			toastClassName={styles.body}
			autoClose={5000}
			icon={false}
			closeButton={false}
			hideProgressBar={true}
		/>
	);
};
