import { init, addMessages } from 'svelte-i18n';
import { getLocale } from './locale';

import et from './et';
import en from './en';

addMessages('et', et);
addMessages('en', en);

init({
  fallbackLocale: 'et',
  initialLocale: getLocale(),
});
