import React from 'react';
import LanguageSwitch from './components/LanguageSwitch';
import {RootState} from './'
import {useSelector} from 'react-redux'
import './styles/style.css'
import dictionary from './dictionary';

function App() {

  const language : string = useSelector<RootState>(state => state.app.languageRus) ? 'rus' : 'eng'


  return (
    <div className='container'>
      <img className='img_main' src={process.env.PUBLIC_URL + '/cv_photo.png'} alt='my face' />
      <h1>{dictionary[language].PHOTO_LABEL}</h1>
      <LanguageSwitch />
    </div>
  );
}

export default App;
