import React, { useEffect, useRef, useState } from 'react';
import LanguageSwitch from './components/LanguageSwitch';
import {RootState} from './'
import {useSelector} from 'react-redux'
import './styles/style.css'
import dictionary from './dictionary';
import CVBlock from './components/CVBlock';
import { CVBlockProps } from './components/interfaces/CVBlockInterfaces';
import MainBlock from './components/MainBlock';
import EducationBlock from './components/EducationBlock';
import SwitchContainer from './components/SwitchContainer';

function App() {

  const language : string = useSelector<RootState>(state => state.app.languageRus) ? 'rus' : 'eng'
  const allCVBlocks : CVBlockProps[] = dictionary[language].CVBlocks
  const [currentBlock, setCurrentBlock] = useState<string>('')

  return (
    <div className='container'>
      <img className='img_main' src={process.env.PUBLIC_URL + '/cv_photo.png'} alt='my face' />
      <h1>{dictionary[language].PHOTO_LABEL}</h1>
      <LanguageSwitch />
      {
        allCVBlocks.map(
          item => <button id={item.blockName} key={item.blockName} onClick={(e : any) => setCurrentBlock(e.target.id)}>{item.blockName}</button>
        )
      }
      <SwitchContainer curBlock={currentBlock} />
    </div>
  );
}

export default App;
