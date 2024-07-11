'use client';

import React, { FC } from 'react';

import { CheckboxAndRadio } from '@/shared/ui';

import styles from './project-specification.module.scss';

export const ProjectSpecification: FC = () => {
	return (
		<>
			<fieldset className={styles.fieldset}>
				<div className={styles.inputContainer}>
					<div className={styles.checkboxContainer}>
						<div className={styles.checkbox}>
							<CheckboxAndRadio
								labelName="Desktop"
								label="option10hours"
								id="option10hours"
								type="checkbox"
							/>
						</div>
						<div className={styles.checkbox}>
							<CheckboxAndRadio
								labelName="Mobile Apps"
								label="option20hours"
								id="option20hours"
								type="checkbox"
							/>
						</div>
					</div>
					<div>
						<CheckboxAndRadio
							labelName="Web"
							label="option30hours"
							id="option30hours"
							type="checkbox"
						/>
					</div>
				</div>
			</fieldset>
		</>
	);
};
