import React from 'react'
import { RootState } from '../..'
import { useSelector, useDispatch } from 'react-redux'
import { switchLang } from '../../redux/actions/appActions'
import dictionary from '../../dictionary'

const LanguageSwitch = () => {

    const languageRus: any = useSelector<RootState>(state => state.app.languageRus)
    const language: string = useSelector<RootState>(state => state.app.languageRus) ? 'rus' : 'eng'

    const dispatch = useDispatch()
    return (
        <div className='switcher-container'>
            <div className={`switcher ${languageRus ? 'switch-rus' : 'switch-eng'}`} onClick={() => dispatch(switchLang())}>
                <div className={`switcher-ball ${languageRus ? 'switch-ball-right' : 'switch-ball-left'}`} />
            </div>
            <div className='switch-label'>{dictionary[language].LANG_LABEL}</div>
        </div>
    )
}

export default LanguageSwitch