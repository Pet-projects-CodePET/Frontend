
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
								label="desktop"
								id="desktop"
								type="checkbox"
							/>
						</div>
						<div className={styles.checkbox}>
							<CheckboxAndRadio
								labelName="Mobile Apps"
								label="mobile"
								id="mobile-apps"
								type="checkbox"
							/>
						</div>
					</div>
					<div>
						<CheckboxAndRadio
							labelName="Web"
							label="web"
							id="web-dev"
							type="checkbox"
						/>
					</div>
				</div>
			</fieldset>
		</>
	);
};
