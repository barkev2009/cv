import dictionary from "./dictionary"

export const getBlockContent = (blockID: string, language: string) => {
    return dictionary[language].CV_BLOCKS.filter((item: any) => item.blockID === blockID)[0].content
}