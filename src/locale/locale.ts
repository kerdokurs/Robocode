import Cookies from 'js-cookie';

const COOKIE_NAME = '_locale';

export const getLocale = () => Cookies.get(COOKIE_NAME) || 'et';

export const setLocale = (lang: 'et' | 'en') => Cookies.set(COOKIE_NAME, lang);

export const clearLocale = () => Cookies.remove(COOKIE_NAME);
