import React from 'react'
import {RootState} from '../'
import {useSelector, useDispatch} from 'react-redux'
import { switchLang } from '../redux/actions/appActions'

const LanguageSwitch = () => {

    const languageRus : any = useSelector<RootState>(state => state.app.languageRus)
    const dispatch = useDispatch()

    return (
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="langSwitch" defaultChecked={languageRus} onChange={() => dispatch(switchLang())}/>
            <label className="form-check-label" htmlFor="langSwitch"></label>
        </div>
    )
}

export default LanguageSwitch