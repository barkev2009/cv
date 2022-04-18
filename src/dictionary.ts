const dictionary : any = {
    eng: {
        PHOTO_LABEL: 'This is my photo',
        LANG_LABEL: 'English',
        CVBlocks: [
            {
                blockName: 'Main',
                namedPoints: false,
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
                blockName: 'Education',
                namedPoints: true,
                namedContent: [
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
            }
        ]
    },
    rus: {
        PHOTO_LABEL: 'Это мое фото',
        LANG_LABEL: 'Русский',
        CVBlocks: [
            {
                blockName: 'Основное',
                namedPoints: false,
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
                blockName: 'Образование',
                namedPoints: true,
                namedContent: [
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
            }
        ]
    }
}

export default dictionary;