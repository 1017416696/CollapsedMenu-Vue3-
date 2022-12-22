import enLocale from './lang/en'
import zhLocale from './lang/zh-cn'
import {createI18n} from "vue-i18n";



const messages = {
    en: {
        ...enLocale
    },
    'zh-cn': {
        ...zhLocale
    }
}


const i18n = createI18n({
    legacy:false,
    locale: 'en',
    messages,
});

export default i18n;
