export interface contentItem {
    name: string
}

export interface contentNamedItem {
    key: string,
    value: string
}

export interface CVBlockProps {
    blockName: string,
    namedPoints: boolean,
    content?: contentItem[],
    namedContent? : contentNamedItem[]
}