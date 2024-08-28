import { z } from 'zod';
import {
	generalEmailRegex,
	noSpecialCharEmailRegex,
	limitedCharEmailRegex,
} from '@/utils/regex-consts';

const schema = z.object({
	email: z
		.string()
		.min(1, { message: 'Поле обязательно для заполнения' })
		.email({ message: 'Проверьте правильность ввода' })
		.min(6, { message: 'Проверьте правильность ввода' })
		.max(256, { message: 'Проверьте правильность ввода' })
		.trim()
		.regex(generalEmailRegex, { message: 'Проверьте правильность ввода' })
		.regex(noSpecialCharEmailRegex, { message: 'Проверьте правильность ввода' })
		.regex(limitedCharEmailRegex, {
			message: 'Только буквы (A-z, А-я), цифры (0-9)',
		}),
});
export default schema;
