import React from 'react';
import styles from './notification-banner.module.scss';
import clsx from 'clsx';
import CheckIcon from '@/shared/assets/icons/check.svg';
import Xmark from '@/shared/assets/icons/xmark.svg';

type NotificationBannerProps = {
	status: string;
	title: string;
	subtitle?: string;
};

export const NotificationBanner = ({
	status,
	title,
	subtitle,
}: NotificationBannerProps) => {
	return (
		<>
			<div
				className={clsx(styles.container, {
					[styles.container_success]: status === 'success',
					[styles.container_error]: status === 'error',
				})}>
				<div
					className={clsx(styles.banner, {
						[styles.banner_success]: status === 'success',
						[styles.banner_error]: status === 'error',
					})}>
					{status === 'success' ? (
						<CheckIcon className={clsx(styles.icon, styles.icon_success)} />
					) : (
						<Xmark className={clsx(styles.icon, styles.icon_error)} />
					)}
					<div
						className={clsx(styles.textWrapper, {
							[styles.textWrapper_success]: status === 'success',
							[styles.textWrapper_error]: status === 'error',
						})}>
						<h3
							className={clsx(styles.title, {
								[styles.title_success]: status === 'success',
								[styles.title_error]: status === 'error',
							})}>
							{title}
						</h3>
						<p
							className={clsx(styles.subtitle, {
								[styles.subtitle_success]: status === 'success',
								[styles.subtitle_error]: status === 'error',
							})}>
							{subtitle}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
