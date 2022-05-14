import React, { FC } from 'react'
import EducationBlock from './EducationBlock'
import MainBlock from './MainBlock'

interface SwitchContainerProps {
    curBlock: string
}

const SwitchContainer: FC<SwitchContainerProps> = ({ curBlock }) => {
    switch (curBlock) {
        case 'Education':
        case 'Образование':
            return <EducationBlock />
        default:
            return <MainBlock />
    }
}

export default SwitchContainer