import React, {useContext} from 'react';
import { LanguageContext } from './LanguageContext';

const TextComponent = () => {
    const {language} = useContext(LanguageContext);

    const texts = {
        en: 'Hello!',
        ru: 'Привет!'
    }
    return <p>{texts[language]}</p>
}

export default TextComponent;