import React from 'react'
import { useDispatch } from 'react-redux'
import { switchCurrentPage } from '../../redux/actions/appActions';
import LetterGenerator from './LetterGenerator';

const LandingPage = () => {

    const dispatch = useDispatch();

    return (
        <div className='container landing_main'>
            <LetterGenerator text='Test something here'/>
            <LetterGenerator text='And here as well'/>
            {/* <button onClick={() => dispatch(switchCurrentPage('cvContainer'))}>Test</button> */}
        </div>
    )
}

export default LandingPage