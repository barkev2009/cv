import React, { FC } from 'react'
import { EDUCATION, PROGRAMMING_LANGUAGES } from '../../../blockIDs'
import EducationBlock from '../CVBlocks/EducationBlock'
import MainBlock from '../CVBlocks/MainBlock'
import ProgLangBlock from '../CVBlocks/ProgLangBlock'

interface SwitchContainerProps {
    curBlock: string
}

const SwitchContainer: FC<SwitchContainerProps> = ({ curBlock }) => {
    switch (curBlock) {
        case EDUCATION:
            return <EducationBlock />
        case PROGRAMMING_LANGUAGES:
            return <ProgLangBlock />
        default:
            return <MainBlock />
    }
}

export default SwitchContainer