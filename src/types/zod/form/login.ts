import { z } from 'zod';

export const LoginFormSchema = z.object({
  id: z.string(),
  password: z.string(),
});

export type LoginFormValues = z.infer<typeof LoginFormSchema>;
