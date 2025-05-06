import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Список поддерживаемых языков
const supportedLngs = ['ru', 'en', 'ua'];

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'ru',
        supportedLngs, // Явно указываем поддерживаемые языки
        debug: process.env.NODE_ENV === 'development', // Включаем debug только в development
        interpolation: {
            escapeValue: false, // Не экранируем HTML в переводах
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json', // Путь к файлам переводов
        },
        detection: {
            order: ['localStorage', 'navigator', 'htmlTag'], // Порядок определения языка
            caches: ['localStorage'], // Где хранить выбранный язык
            lookupLocalStorage: 'i18nextLng', // Ключ для localStorage
            htmlTag: document.documentElement, // Для определения языка из атрибута lang в HTML
        },
        react: {
            useSuspense: false, // Отключаем Suspense для совместимости
        }
    });

export default i18n;