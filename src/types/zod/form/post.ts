import { z } from 'zod';

export const postFormValues = z.object({
  Who: z.string().min(1),
  Where: z.string().min(1),
  When: z.string().min(1),
  What: z.string().min(1),
  How: z.string().min(1),
  Why: z.string().min(1),
  SelfRating: z.number().max(5).min(0),
  Date: z.instanceof(Date),
});

export type PostFormValues = z.infer<typeof postFormValues>;
