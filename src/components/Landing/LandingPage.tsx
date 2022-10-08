import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../..';
import dictionary from '../../dictionary';
import { switchCurrentPage } from '../../redux/actions/appActions';
import LanguageSwitchCircle from '../common/LanguageSwitchCircle';
import LetterGenerator from './LetterGenerator';

const LandingPage = () => {

    const language: string = useSelector<RootState>(state => state.app.languageRus) ? 'rus' : 'eng'
    const dispatch = useDispatch();

    return (
        <div className='container landing_main'>
            <LetterGenerator text={dictionary[language].FIRST_LINE}/>
            <LetterGenerator text={dictionary[language].SECOND_LINE}/>
            <button onClick={() => dispatch(switchCurrentPage('cvContainer'))}>Test</button>
            <LanguageSwitchCircle />
        </div>
    )
}

export default LandingPage