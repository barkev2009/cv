import { appAction } from './../interfaces/appInterfaces';
import { appState } from "../interfaces/appInterfaces"
import { SWITCH_LANGUAGE } from '../types';

const initialState : appState = {languageRus: true}

export const appReducer = (state: appState = initialState, action: appAction) : appState => {
    switch (action.type) {
        case SWITCH_LANGUAGE:
            return {...state, languageRus: !state.languageRus}
        default:
            return state
    }
}