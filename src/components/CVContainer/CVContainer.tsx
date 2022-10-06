import React, { useState } from 'react'
import FaceContainer from './components/FaceContainer'
import SwitchContainer from './components/SwitchContainer'

const CVContainer = () => {

    const [currentBlock, setCurrentBlock] = useState<string>('')

    return (
        <div className='container'>
            <FaceContainer setCurrentBlock={setCurrentBlock} />
            <div className="main_container">
                <SwitchContainer curBlock={currentBlock} />
            </div>
        </div>
    )
}

export default CVContainer