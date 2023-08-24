import { Router } from 'express';

export enum CollectionNameEnum {
    characters = 'characters'
}

export const collectionNames = Object.values(CollectionNameEnum);

export interface Routes {
    path?: string;
    router: Router;
}

export interface DynamicControllerInterface {
//   [key: string]: Function;
    getAllCharacter: Function;
}