import { Router } from 'express';

export enum CollectionNameEnum {
    characters = 'characters',
    akatsuki = 'akatsuki',
    clans = 'clans',
}

export const collectionNames = Object.values(CollectionNameEnum);

export interface Routes {
    path?: string;
    router: Router;
};
