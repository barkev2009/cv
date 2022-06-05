import React, { useState } from 'react';
import './styles/style.css'
import SwitchContainer from './components/SwitchContainer';
import FaceContainer from './components/FaceContainer';

function App() {

  const [currentBlock, setCurrentBlock] = useState<string>('')

  return (
    <div className='container'>
      <FaceContainer setCurrentBlock={setCurrentBlock} />
      <div className="main_container">
        <SwitchContainer curBlock={currentBlock} />
      </div>
    </div>
  );
}

export default App;
