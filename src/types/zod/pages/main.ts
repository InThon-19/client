import { z } from 'zod';

// example code
import { PaginationSchema } from '@type/zod/common';

export const HomePageQuerySchema = z.object({}).merge(PaginationSchema);

export type HomePageQuery = z.infer<typeof HomePageQuerySchema>;
