import React from 'react';
import LanguageSwitch from './components/LanguageSwitch';
import {RootState} from './'
import {useSelector} from 'react-redux'
import './styles/style.css'
import dictionary from './dictionary';
import CVBlock from './components/CVBlock';
import { CVBlockProps } from './components/interfaces/CVBlockInterfaces';

function App() {

  const language : string = useSelector<RootState>(state => state.app.languageRus) ? 'rus' : 'eng'

  const allCVBlocks : CVBlockProps[] = dictionary[language].CVBlocks

  return (
    <div className='container'>
      <img className='img_main' src={process.env.PUBLIC_URL + '/cv_photo.png'} alt='my face' />
      <h1>{dictionary[language].PHOTO_LABEL}</h1>
      <LanguageSwitch />
      {
        allCVBlocks.map(
          item => <CVBlock blockName={item.blockName} namedPoints={item.namedPoints} content={item.content} namedContent={item.namedContent} /> 
        )
      }
    </div>
  );
}

export default App;
