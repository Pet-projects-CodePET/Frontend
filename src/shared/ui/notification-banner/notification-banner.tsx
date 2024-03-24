import React from 'react';
import styles from './notification-banner.module.scss';
import clsx from 'clsx';
// import { ValueOf } from 'next/dist/shared/lib/constants';
// import checkIcon from '@/shared/assets/icons/check.svg';
// import Xmark from '@/shared/assets/icons/xmark.svg';
// import xIcon from '@/shared/assets/icons/xmark.svg';

// enum NotificationStatusKeys {
// 	pending = 'pending',
// 	error = 'error',
// 	success = 'success',
// }

type NotificationBannerProps = {
	// status: ValueOf<typeof NotificationStatusKeys>;
	status: string;
	title: string;
	subtitle: string;
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
					[styles.container_pending]: status === 'pending',
				})}>
				<div
					className={clsx(styles.banner, {
						[styles.banner_success]: status === 'success',
						[styles.banner_error]: status === 'error',
						[styles.banner_pending]: status === 'pending',
					})}>
					<div
						className={clsx(styles.icon, {
							[styles.icon_success]: status === 'success',
							[styles.icon_error]: status === 'error',
							[styles.icon_pending]: status === 'pending',
						})}
					/>
					<div
						className={clsx(styles.textWrapper, {
							[styles.textWrapper_success]: status === 'success',
							[styles.textWrapper_error]: status === 'error',
							[styles.textWrapper_pending]: status === 'pending',
						})}>
						<h3
							className={clsx(styles.title, {
								[styles.title_success]: status === 'success',
								[styles.title_error]: status === 'error',
								[styles.title_pending]: status === 'pending',
							})}>
							{title}
						</h3>
						<p
							className={clsx(styles.subtitle, {
								[styles.subtitle_success]: status === 'success',
								[styles.subtitle_error]: status === 'error',
								[styles.subtitle_pending]: status === 'pending',
							})}>
							{subtitle}
						</p>
					</div>
				</div>
			</div>

			{/* <div
				className={clsx(styles.container, {
					[styles.container_success]: status === 'success',
					[styles.container_error]: status === 'error',
					[styles.container_pending]: status === 'pending',
				})}>
				<div
					className={clsx(styles.icon, {
						[styles.icon_success]: status === 'success',
						[styles.icon_error]: status === 'error',
						[styles.icon_pending]: status === 'pending',
					})}
				/>
				<div
					className={clsx(styles.textWrapper, {
						[styles.textWrapper_success]: status === 'success',
						[styles.textWrapper_error]: status === 'error',
						[styles.textWrapper_pending]: status === 'pending',
					})}>
					<h3
						className={clsx(styles.title, {
							[styles.title_success]: status === 'success',
							[styles.title_error]: status === 'error',
							[styles.title_pending]: status === 'pending',
						})}>
						{title}
					</h3>
					<p
						className={clsx(styles.subtitle, {
							[styles.subtitle_success]: status === 'success',
							[styles.subtitle_error]: status === 'error',
							[styles.subtitle_pending]: status === 'pending',
						})}>
						{subtitle}
					</p>
				</div>
			</div> */}
		</>
	);
};
