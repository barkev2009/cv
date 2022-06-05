import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '..'
import dictionary from '../dictionary'
import Header from './Header'
import LanguageSwitch from './LanguageSwitch'

interface FaceContainerProps {
    setCurrentBlock: any
}

const FaceContainer: FC<FaceContainerProps> = ({ setCurrentBlock }) => {

    const language: string = useSelector<RootState>(state => state.app.languageRus) ? 'rus' : 'eng'

    return (
        <div>
            <div className="back-rect" />
            <div className="back-header">
                <a href="https://wa.me/89618476363" className="whatsapp_float" target="_blank" rel="noopener noreferrer">
                    <img className='whatsapp-icon' src={process.env.PUBLIC_URL + '/whatsapp-icon.svg'} alt='whatsapp' />
                </a>
                <LanguageSwitch />
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