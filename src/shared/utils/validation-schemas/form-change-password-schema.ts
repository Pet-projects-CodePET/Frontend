import { z } from 'zod';
import { passwordRegex } from '../../../utils/regex-consts';

const FormChangePasswordSchema = z
	.object({
		password: z
			.string()
			.min(1, { message: 'Поле обязательно для заполнения' })
			.min(8, { message: 'Длина поля от 8 до 20 символов' })
			.max(20, { message: 'Длина поля от 8 до 20 символов' })
			.regex(/[u00AE]/, 'Проверьте правильность ввода'),

		newPassword: z
			.string()
			.min(1, { message: 'Поле обязательно для заполнения' })
			.min(8, { message: 'Длина поля от 8 до 20 символов' })
			.max(20, { message: 'Длина поля от 8 до 20 символов' })
			.regex(passwordRegex, 'Проверьте правильность ввода'),

		reapeatPassword: z
			.string()
			.min(1, { message: 'Поле обязательно для заполнения' })
			.min(8, { message: 'Длина поля от 8 до 20 символов' })
			.max(20, { message: 'Длина поля от 8 до 20 символов' })
			.regex(passwordRegex, 'Проверьте правильность ввода'),
	})
	.refine((e) => e.newPassword === e.reapeatPassword, {
		message: 'Пароль не совпадает с введенным',
		path: ['reapeatPassword'],
	});

export default FormChangePasswordSchema;
