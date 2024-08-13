/**
 * Defines the schema for a tour object.
 */
import { z } from 'zod';

export const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  info: z.string(),
  price: z.string(),
});

export type Scheme = z.infer<typeof tourSchema>;//infer the type from the schema