/* eslint-disable camelcase */
import { z } from 'zod';

const ProfessionSchema = z.object({
  id: z.number(),
  specialization: z.string(),
  speciality: z.string(),
});

const SkillSchema = z.object({
  id: z.number(),
  name: z.string(),
});

const ProjectSpecialistSchema = z.object({
  id: z.number(),
  profession: z.union([z.number(), ProfessionSchema]),
  skills: z.array(z.union([z.number(), SkillSchema])),
  count: z.number().optional(),
  level: z.number().optional(),
  is_required: z.boolean().optional(),
});

const FormCreateProjectDraftSchema = z
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
      .string()
      .optional()
      .or(z.literal(''))
      .default(''),

    directions: z
      .array(z.string())
      .optional()
      .default([]),

    busyness: z.string().or(z.literal('')).or(z.null()).default(''),

    link: z
      .string()
      .url({ message: 'Некорректный URL' })
      .or(z.literal(''))
      .default('')
      .optional(),

    started: z
      .string()
      .optional()
      .or(z.literal(''))
      .default(''),

    ended: z
      .string()
      .optional()
      .or(z.literal(''))
      .default(''),

    project_specialists: z
      .array(ProjectSpecialistSchema)
      .optional()
      .default([]),
  })
  // Условная проверка дат только если они заполнены
  .refine(
    (data) => {
      if (!data.started || !data.ended) return true;
      return new Date(data.ended) >= new Date(data.started);
    },
    {
      message: 'Дата окончания должна быть после даты начала',
      path: ['ended'],
    }
  );

export default FormCreateProjectDraftSchema;
