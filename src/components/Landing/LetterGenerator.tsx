import React, { FC } from 'react'
import GeneratedLetter from './GeneratedLetter'

interface LetterGeneratorProps {
  text: string
}

const LetterGenerator: FC<LetterGeneratorProps> = ({ text }) => {

  return (
    <div className='letters'>
      {
        text.split('').map(
          (item, idx) => <GeneratedLetter letter={item} key={idx}/>
        )
      }
    </div>
  )
}

export default LetterGenerator