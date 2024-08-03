import {
	generalEmailRegex,
	noSpecialCharEmailRegex,
	limitedCharEmailRegex,
	passwordRegex,
} from '@/utils/regex-consts';
import { z } from 'zod';

const noConsecutiveDashes = (value: string) =>
	!/--/.test(value.replace(/\s/g, ''));
const noSpacesBetweenDashes = (value: string) =>
	!/\s/.test(value.replace(/\s/g, ''));

const FormSchema = z
	.object({
		email: z
			.string()
			.min(1, { message: 'Поле обязательно для заполнения' })
			.email({ message: 'Проверьте правильность ввода' })
			.min(6, { message: 'Длина поля от 6 до 256 символов' })
			.max(256, { message: 'Длина поля от 6 до 256 символов' })
			.trim()
			.regex(generalEmailRegex, { message: 'Проверьте правильность ввода' })
			.regex(noSpecialCharEmailRegex, {
				message: 'Проверьте правильность ввода',
			})
			.regex(limitedCharEmailRegex, {
				message: 'Только буквы (A-z, А-я), цифры (0-9)',
			}),

		username: z
			.string()
			.min(1, { message: 'Поле обязательно для заполнения' })
			.min(2, { message: 'Длина поля от 2 до 30 символов' })
			.max(30, { message: 'Длина поля от 2 до 30 символов' })
			.trim()
			.regex(limitedCharEmailRegex, {
				message: 'Только буквы (A-z, А-я), цифры (0-9)',
			})
			.regex(noSpecialCharEmailRegex, {
				message: 'Только дефис, точка, нижнее подчеркивание',
			})
			.refine(noConsecutiveDashes, { message: 'Введите корректную фамилию' })
			.refine(noSpacesBetweenDashes, {
				message: 'Введите никнейм без пробелов',
			}),
		password: z
			.string()
			.min(1, { message: 'Поле обязательно для заполнения' })
			.min(8, { message: 'Длина поля от 8 до 20 символов' })
			.max(20, { message: 'Длина поля от 8 до 20 символов' })
			.regex(passwordRegex, {
				message: 'Только буквы (A-z, А-я), цифры (0-9), спецсимволы',
			}),

		// eslint-disable-next-line camelcase
		re_password: z
			.string()
			.min(1, { message: 'Поле обязательно для заполнения' })

			.min(8, { message: 'Длина поля от 8 до 20 символов' })
			.max(20, { message: 'Длина поля от 8 до 20 символов' }),
	})
	.refine((val) => val.password === val.re_password, {
		message: 'Пароли не совпадают',
		path: ['re_password'],
	});

export default FormSchema;
