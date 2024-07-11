import React from 'react';
import { TextEditor } from '@/shared/ui/text-editor/text-editor';
import { InviteToProjectFeature } from '@/features';
import styles from './invite-to-project.module.scss';

export const InviteToProject = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<>
			<div className={styles.specialty}>{children}</div>
			<p className={styles.title}>Сопроводительное письмо</p>
			<TextEditor labelName={''} />
            <div className={styles.button}>
            <InviteToProjectFeature />
            </div>    
		</>
	);
};
