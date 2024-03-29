import { Router } from 'express';

export enum CollectionNameEnum {
    characters = 'characters',
    akatsuki = 'akatsuki',
    clans = 'clans',
    kara = 'kara',
    kekkeigenkai = 'kekkei-genkai',
    tailedbeasts = 'tailed-beasts',
    teams = 'teams',
    villages = 'villages'
}

export const collectionNames = Object.values(CollectionNameEnum);

export interface Routes {
    path?: string;
    router: Router;
};
