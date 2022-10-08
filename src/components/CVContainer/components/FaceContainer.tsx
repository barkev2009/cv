import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../..'
import dictionary from '../../../dictionary'
import { switchCurrentPage } from '../../../redux/actions/appActions'
import Header from './Header'
import LanguageSwitchCircle from '../../common/LanguageSwitchCircle'

interface FaceContainerProps {
    setCurrentBlock: any
}

const FaceContainer: FC<FaceContainerProps> = ({ setCurrentBlock }) => {

    const language: string = useSelector<RootState>(state => state.app.languageRus) ? 'rus' : 'eng'
    const dispatch = useDispatch();
    

    return (
        <div>
            <div className="back-rect" />
            <div className="back-header">
                <button onClick={() => dispatch(switchCurrentPage('landing'))}>Test</button>
                <a href="https://wa.me/89618476363" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
                    <img className='whatsapp-icon' src={process.env.PUBLIC_URL + '/whatsapp-icon.svg'} alt='whatsapp' />
                </a>
                <LanguageSwitchCircle />
            </div>
            <div className="main_card">
                <img className='img_main' src={process.env.PUBLIC_URL + '/cv_photo.png'} alt='my face' />
                <div className="main_info">
                    <h1 >{dictionary[language].PHOTO_LABEL}</h1>
                </div>
                <Header setCurrentBlock={setCurrentBlock} />
            </div>
        </div>
    )
}

export default FaceContainer