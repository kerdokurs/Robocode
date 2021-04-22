import Cookies from 'js-cookie';
import { getLocaleFromNavigator } from 'svelte-i18n';

const COOKIE_NAME = '_locale';

export const getLocale = () =>
  Cookies.get(COOKIE_NAME) || getLocaleFromNavigator() || 'et';

export const setLocale = (lang: 'et' | 'en') => Cookies.set(COOKIE_NAME, lang);

export const clearLocale = () => Cookies.remove(COOKIE_NAME);
