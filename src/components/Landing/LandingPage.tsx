import React from 'react'
import { useDispatch } from 'react-redux'
import { switchCurrentPage } from '../../redux/actions/appActions';

const LandingPage = () => {

    const dispatch = useDispatch();

    return (
        <div className='container landing_main'>
            {/* <button onClick={() => dispatch(switchCurrentPage('cvContainer'))}>Test</button> */}
        </div>
    )
}

export default LandingPage