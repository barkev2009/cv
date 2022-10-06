import { SWITCH_LANGUAGE, SWITCH_PAGE } from '../types';
import { appAction } from './../interfaces/appInterfaces';

export function switchLang() : appAction {
    return {
        type: SWITCH_LANGUAGE 
    }
}

export function switchCurrentPage(currentPage: string) : appAction {
    localStorage.setItem('currentPage', currentPage);
    return {
        type: SWITCH_PAGE,
        payload: currentPage
    }
}