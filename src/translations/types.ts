import { Resource } from 'i18next';

export enum TraslationKeywords {
    English = 'english',
    Login = 'login',
    EnterUsername = 'enterUsername',
    Polish = 'polish',
    Search = 'search',
    VisitProfile = 'visitProfile',
    Welcome = 'welcome',
}

export interface Translation extends Resource {
    [key: string]: {
        translations: { [key in TraslationKeywords]: string };
    };
}
