import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '..'
import dictionary from '../dictionary'
import { CVBlockProps } from './interfaces/CVBlockInterfaces'

interface HeaderProps {
    setCurrentBlock: any
}

const Header: FC<HeaderProps> = ({ setCurrentBlock }) => {

    const language: string = useSelector<RootState>(state => state.app.languageRus) ? 'rus' : 'eng'
    const allCVBlocks: CVBlockProps[] = dictionary[language].CV_BLOCKS

    return (
        <div className='cv-blocks'>
            {
                allCVBlocks.map(
                    item => <div className='block-item' id={item.blockID} key={item.blockID} onClick={(e: any) => setCurrentBlock(e.target.id)}>{item.blockName}</div>
                )
            }
        </div>
    )
}

export default Header