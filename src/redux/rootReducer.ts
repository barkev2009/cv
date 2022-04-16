import { appReducer } from './reducers/appReducer';
import {combineReducers} from 'redux'

export const rootReducer = combineReducers(
    {
        app: appReducer
    }
)