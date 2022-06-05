import { EDUCATION, MAIN, PROGRAMMING_LANGUAGES } from './blockIDs';


const dictionary: any = {
    eng: {
        PHOTO_LABEL: 'This is my photo',
        LANG_LABEL: 'English',
        CV_BLOCKS: [
            {
                blockID: MAIN,
                blockName: 'Main',
                content: [
                    {
                        name: 'Finished school'
                    },
                    {
                        name: 'Now working'
                    }
                ]
            },
            {
                blockID: EDUCATION,
                blockName: 'Education',
                content: [
                    {
                        key: 'First',
                        value: 'School'
                    },
                    {
                        key: 'Second',
                        value: 'Bachelor'
                    },
                    {
                        key: 'Third',
                        value: 'Master'
                    }
                ]
            },
            {
                blockID: PROGRAMMING_LANGUAGES,
                blockName: 'Programming languages',
                content: [
                    {
                        name: 'Python'
                    },
                    {
                        name: 'JavaScript'
                    }
                ]
            }
        ]
    },
    rus: {
        PHOTO_LABEL: 'Это мое фото',
        LANG_LABEL: 'Русский',
        CV_BLOCKS: [
            {
                blockID: MAIN,
                blockName: 'Основное',
                content: [
                    {
                        name: 'Закончил школу'
                    },
                    {
                        name: 'Теперь работаю'
                    }
                ]
            },
            {
                blockID: EDUCATION,
                blockName: 'Образование',
                content: [
                    {
                        key: 'Первое',
                        value: 'Школа'
                    },
                    {
                        key: 'Второе',
                        value: 'Бакалавр'
                    },
                    {
                        key: 'Третье',
                        value: 'Магистр'
                    }
                ]
            },
            {
                blockID: PROGRAMMING_LANGUAGES,
                blockName: 'Языки программирования',
                content: [
                    {
                        name: 'Python'
                    },
                    {
                        name: 'JavaScript'
                    }
                ]
            }
        ]
    }
}

export default dictionary;