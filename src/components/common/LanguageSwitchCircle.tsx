import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../..'
import { switchLang } from '../../redux/actions/appActions';

const LanguageSwitchCircle = () => {

    const languageRus: any = useSelector<RootState>(state => state.app.languageRus);
    const dispatch = useDispatch();

    return (
        <div className='lang_container' onClick={() => dispatch(switchLang())}>
            <div className={languageRus ? 'lang_circle' : 'lang_circle lang_circle_rotate'}></div>
        </div>
    )
}

export default LanguageSwitchCircle