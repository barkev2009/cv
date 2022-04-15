import React from 'react';
import './styles/style.css'

function App() {
  return (
    <div className='container'>
      <img className='img_main' src={process.env.PUBLIC_URL + '/cv_photo.png'} alt='my face' />
    </div>
  );
}

export default App;
