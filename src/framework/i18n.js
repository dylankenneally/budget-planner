import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		whitelist: ['en-US', 'en'],
		nonExplicitWhitelist: true,
		fallbackLng: ['en'],
		backend: {
			loadPath: 'resources/locale/{{lng}}/{{ns}}.json',
		},
		debug: process.env.NODE_ENV === 'development',
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
	});

export default i18n;
