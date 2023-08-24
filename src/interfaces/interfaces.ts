import { Router } from 'express';

export enum CollectionNameEnum {
    characters = 'characters',
    akatsuki = 'akatsuki',
    clans = 'clans',
    kara = 'kara',
    kekkeigenkai = 'kekkeigenkai',
    tailedbeasts = 'tailedbeasts',
    teams = 'teams',
    villages = 'villages'
}

export const collectionNames = Object.values(CollectionNameEnum);

export interface Routes {
    path?: string;
    router: Router;
};
