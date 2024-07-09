import { emailRegex1, emailRegex2, emailRegex3, passwordRegex } from '@/utils/regex-consts';
import { z } from 'zod';

const noConsecutiveDashes = (value: string) => !/--/.test(value.replace(/\s/g, ''));
const noSpacesBetweenDashes = (value: string) => !/\s/.test(value.replace(/\s/g, ''));

const FormSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'Поле обязательно для заполнения' })
		.email({ message: 'Проверьте правильность ввода' })
		.min(6, { message: 'Проверьте правильность ввода' })
		.max(256, { message: 'Проверьте правильность ввода' })
		.trim()
		.regex(emailRegex1, { message: 'Проверьте правильность ввода' })
		.regex(emailRegex2, { message: 'Проверьте правильность ввода' })
		.regex(emailRegex3, { message: 'Только буквы (A-z, А-я), цифры (0-9)' }),

	username: z
		.string()
		.min(1, { message: 'Поле обязательно для заполнения' })
		.min(2, { message: 'Длина поля от 2 до 30 символов' })
		.max(30, { message: 'Длина поля от 2 до 30 символов' })
		.trim()
		.regex(emailRegex3, { message: 'Только буквы (A-z, А-я), цифры (0-9)' })
		.regex(emailRegex2, {
			message: 'Только дефис, точка, нижнее подчеркивание',
		})
		.refine(noConsecutiveDashes, { message: 'Введите корректную фамилию' })
		.refine(noSpacesBetweenDashes, { message: 'Введите никнейм без пробелов' }),
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
		.string()		.min(1, { message: 'Поле обязательно для заполнения' })

		.min(8, { message: 'Длина поля от 8 до 20 символов' })
		.max(20, { message: 'Длина поля от 8 до 20 символов' })

}).refine((val) => val.password === val.re_password, {
	message: 'Пароли не совпадают',
	path: ["re_password"]
});

export default FormSchema;
