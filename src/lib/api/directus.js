import { PUBLIC_URL } from '$env/static/public';
import { createDirectus, authentication, rest, readItems, readUsers } from '@directus/sdk';

export { readItems, readUsers };

// create global db instance
export const db = createDirectus(PUBLIC_URL).with(authentication()).with(rest());