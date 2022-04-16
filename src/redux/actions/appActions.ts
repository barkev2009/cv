import { SWITCH_LANGUAGE } from '../types';
import { appAction } from './../interfaces/appInterfaces';

export function switchLang() : appAction {
    return {
        type: SWITCH_LANGUAGE 
    }
}