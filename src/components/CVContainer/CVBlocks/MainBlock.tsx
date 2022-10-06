import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../..'
import { MAIN } from '../../../blockIDs'
import { getBlockContent } from '../../../utils'

const MainBlock = () => {

  const language: string = useSelector<RootState>(state => state.app.languageRus) ? 'rus' : 'eng'

  return (
    <ul>
      {
        getBlockContent(MAIN, language).map((item : any, idx: number) => <li key={idx}>{item.name}</li>)
      }
    </ul>
  )
}

export default MainBlock