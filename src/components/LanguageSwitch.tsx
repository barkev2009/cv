import React from 'react'
import {RootState} from '../'
import {useSelector, useDispatch} from 'react-redux'
import { switchLang } from '../redux/actions/appActions'
import '../styles/style.css'
import dictionary from '../dictionary'

const LanguageSwitch = () => {

    const languageRus : any = useSelector<RootState>(state => state.app.languageRus)
    const language : string = useSelector<RootState>(state => state.app.languageRus) ? 'rus' : 'eng'

    const dispatch = useDispatch()
    return (
        <div className="form-check form-switch">
            <input className="form-check-input lang-switch" type="checkbox" id="langSwitch" defaultChecked={languageRus} onChange={() => dispatch(switchLang())}/>
            <label className="form-check-label" htmlFor="langSwitch">{dictionary[language].LANG_LABEL}</label>
        </div>
    )
}

export default LanguageSwitch