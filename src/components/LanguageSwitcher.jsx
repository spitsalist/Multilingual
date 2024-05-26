import React, {useContext} from 'react';
import { LanguageContext } from './LanguageContext';

const LanguageSwicher = () => {
    const {changeLanguage} = useContext(LanguageContext);

    return (
        <div>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('ru')}>Русский</button>

        </div>
    )
}

export default LanguageSwicher;