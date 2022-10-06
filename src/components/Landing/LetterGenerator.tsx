import React, { FC } from 'react'

interface LetterGeneratorProps {
    text: string
}

const LetterGenerator : FC<LetterGeneratorProps> = ({text}) => {
  return (
    <div className='letters'>
        {
            text.split('').map(
                item => item !== ' ' ?
                    <div className='letter'>{item}</div> :
                    <div className='letter' style={{'width': '30px'}} />
            )
        }
    </div>
  )
}

export default LetterGenerator