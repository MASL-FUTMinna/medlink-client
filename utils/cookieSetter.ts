'use server';
import { cookies } from 'next/headers';

export const cookieSetter = (value: string) => {
    console.log({value})
  cookies().set('token', value, { path: '/', expires: new Date(Date.now() + 86400000), sameSite: 'lax' });
};          