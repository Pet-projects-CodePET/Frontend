/* eslint-disable camelcase */
import { z } from 'zod';

const FormCreateProjectSchema = z
	.object({
		name: z
			.string({
				required_error: 'Поле обязательно для заполнения',
			})
			.min(5, { message: 'Длина поля от 5 до 100 символов' })
			.max(100, { message: 'Длина поля от 5 до 100 символов' })
			.regex(/^[а-яА-ЯёЁa-zA-Z0-9 .,\-+/:–—]+$/, {
				message:
					'Допустимы: кириллица, латиница, цифры, пробелы и символы .,-+/:–—',
			}),
		description: z
			.string({
				required_error: 'Поле обязательно для заполнения',
			})
			.min(1, { message: 'Поле обязательно для заполнения' }),

		directions: z
			.array(z.string(), {
				required_error: 'Выберите от 1 до 3 направлений',
			})
			.min(1, { message: 'Выберите от 1 до 3 направлений' }),

		busyness: z.string().or(z.literal('')).or(z.null()).default(''),

		link: z
			.string()
			.url({ message: 'Некорректный URL' })
			.or(z.literal(''))
			.default(''),

		started: z
			.string({
				required_error: 'Дата начала обязательна',
				invalid_type_error: 'Должна быть строка в формате даты',
			})
			.min(1, 'Дата начала обязательна')
			.refine((val) => !isNaN(Date.parse(val)), {
				message: 'Некорректный формат даты начала',
			}),

		ended: z
			.string({
				required_error: 'Дата окончания обязательна',
				invalid_type_error: 'Должна быть строка в формате даты',
			})
			.min(1, 'Дата окончания обязательна')
			.refine((val) => !isNaN(Date.parse(val)), {
				message: 'Некорректный формат даты окончания',
			}),
	})
	// project_specialists: z
	// .array(z.string(), {
	// 	required_error: '',
	// })
	// .min(1, { message: '' }),

	.refine((data) => new Date(data.ended) >= new Date(data.started), {
		message: 'Дата окончания должна быть после даты начала',
		path: ['ended'],
	});

export default FormCreateProjectSchema;
