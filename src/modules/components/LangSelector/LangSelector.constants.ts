import { IconName } from '../../utils/IconUtils/Icon';


export interface Lang {
    name: IconName;
    translation: string;
}

export const languages: Lang[] = [
    {
        name: 'en',
        translation: 'english',
    },
    {
        name: 'pl',
        translation: 'polish',
    },
];
