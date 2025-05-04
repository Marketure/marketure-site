
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'b5vfiq8x',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
  token: import.meta.env.SANITY_API_TOKEN
});
