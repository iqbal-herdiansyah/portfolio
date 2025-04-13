import { z } from 'zod';

export const FormContactSchema = z.object({
  name: z.string().refine((value) => value.length >= 1, {
    params: {
      i18n: {
        key: 'form.name.required'
      }
    }
  }),
  email: z.string().refine((value) => emailValidator(value), {
    params: {
      i18n: {
        key: 'form.email.not_valid'
      }
    }
  }),
  message: z.string()
});

export type FormContactSchema = z.infer<typeof FormContactSchema>;
