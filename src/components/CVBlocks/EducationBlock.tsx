import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../..'
import { EDUCATION } from '../../blockIDs'
import { getBlockContent } from '../../utils'

const EducationBlock = () => {

  const language : string = useSelector<RootState>(state => state.app.languageRus) ? 'rus' : 'eng'

  return (
    <ul>
      {
        getBlockContent(EDUCATION, language).map((item : any, idx: number) => <li key={idx}>{item.key}   {item.value}</li>)
      }
    </ul>
  )
}

export default EducationBlock