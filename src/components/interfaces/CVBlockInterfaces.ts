export interface contentItem {
    name: string
}

export interface contentNamedItem {
    key: string,
    value: string
}

export interface CVBlockProps {
    blockName: string,
    blockID: string,
    content?: contentItem[] | contentNamedItem[]
}