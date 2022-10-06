import { appAction } from './../interfaces/appInterfaces';
import { appState } from "../interfaces/appInterfaces"
import { SWITCH_LANGUAGE, SWITCH_PAGE } from '../types';

const initialPage : string = 'landing';

if (!localStorage.getItem('currentPage') ) {
    localStorage.setItem('currentPage', initialPage);
}

const curPage = localStorage.getItem('currentPage');
const initialState : appState = {languageRus: true, currentPage: typeof(curPage) === 'string' ? curPage : initialPage}

export const appReducer = (state: appState = initialState, action: appAction) : appState => {
    switch (action.type) {
        case SWITCH_LANGUAGE:
            return {...state, languageRus: !state.languageRus}
        case SWITCH_PAGE:
            return {...state, currentPage: action.payload}
        default:
            return state
    }
}