import { z } from 'zod';
import {
	generalEmailRegex,
	noSpecialCharEmailRegex,
	limitedCharEmailRegex,
	passwordRegex,
} from '@/utils/regex-consts';

const schema = z.object({
	email: z
		.string()
		.min(1, { message: 'Поле обязательно для заполнения' })
		.email({ message: 'Проверьте правильность ввода' })
		.min(6, { message: 'Длина поля от 6 до 256 символов' })
		.max(256, { message: 'Длина поля от 6 до 256 символов' })
		.trim()
		.regex(generalEmailRegex, { message: 'Проверьте правильность ввода' })
		.regex(noSpecialCharEmailRegex, { message: 'Проверьте правильность ввода' })
		.regex(limitedCharEmailRegex, {
			message: 'Только буквы (A-z, А-я), цифры (0-9)',
		}),

	password: z
		.string()
		.trim()
		.min(1, { message: 'Поле обязательно для заполнения' })
		.min(8, { message: 'Длина поля от 8 до 20 символов' })
		.max(20, { message: 'Длина поля от 8 до 20 символов' })
		.regex(passwordRegex, { message: 'Проверьте правильность ввода' }),
});

export default schema;
