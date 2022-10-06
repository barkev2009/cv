import React, {FC} from 'react'
import CVContainer from './CVContainer/CVContainer'
import LandingPage from './Landing/LandingPage'

interface MainSwitchContainerProps {
    curPage: string
}

const MainSwitchContainer : FC<MainSwitchContainerProps> = ({curPage}) => {

    switch (curPage) {
        case 'landing':
            return <LandingPage />
        case 'cvContainer':
            return <CVContainer />
        default:
            return <LandingPage />
    }
    
}

export default MainSwitchContainer