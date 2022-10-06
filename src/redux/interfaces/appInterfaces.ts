export interface appState {
    languageRus: boolean,
    currentPage: string
}

export interface appAction {
    type: string,
    payload? : any
}