import { z } from 'zod';
import { emailRegex1, emailRegex2, emailRegex3 } from '@/utils/regex-consts';

const schema = z.object({
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
});
export default schema;
