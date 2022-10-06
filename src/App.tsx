import React from 'react';
import './styles/style.css'
import MainSwitchContainer from './components/MainSwitchContainer';
import { useSelector } from 'react-redux';
import { RootState } from '.';

function App() {

  const currentPage : any = useSelector<RootState>(state => state.app.currentPage);

  return (
    <MainSwitchContainer curPage={currentPage} />
  );
}

export default App;
