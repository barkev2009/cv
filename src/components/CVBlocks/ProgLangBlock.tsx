import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../..'
import { PROGRAMMING_LANGUAGES } from '../../blockIDs'
import { getBlockContent } from '../../utils'

const ProgLangBlock = () => {

    const language: string = useSelector<RootState>(state => state.app.languageRus) ? 'rus' : 'eng'

    return (
        <ul>
            {
                getBlockContent(PROGRAMMING_LANGUAGES, language).map((item: any, idx: number) => <li key={idx}>{item.name}</li>)
            }
        </ul>
    )
}

export default ProgLangBlock