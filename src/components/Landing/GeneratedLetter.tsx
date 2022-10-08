import React, {useState, FC} from 'react'

interface GeneratedLetterProps {
    letter: string
}

const GeneratedLetter : FC<GeneratedLetterProps> = ({letter}) => {

    const [letterClass, setLetterClass] = useState<string>('letter');

    const hoverHandler = () => {
        setLetterClass('letter letter_wiggle');
        setTimeout(
            () => {
                setLetterClass('letter');
            }, 500
        );
    }

    return (
        letter !== ' ' ?
            <div onMouseEnter={hoverHandler} className={letterClass}>{letter}</div> :
            <div onMouseEnter={hoverHandler} className={letterClass} style={{ 'width': '30px' }} />
    )
}

export default GeneratedLetter