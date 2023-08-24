import express from 'express';
import { collectionNames } from '../interfaces/interfaces';
import DynamicController from '../controllers/index.controllers';

const router = express.Router();
const dynamicController: DynamicController | { [key: string]: any } = new DynamicController();

collectionNames.forEach((collection: string) => {
    router.get(`/${collection}`, dynamicController[`getAll${collection}`]);
    router.get(`/${collection}/:ids`, dynamicController[`getByIds${collection}`]);
});

export = router;