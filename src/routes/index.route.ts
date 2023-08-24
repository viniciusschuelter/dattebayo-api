import express from 'express';
import { collectionNames } from '../interfaces/interfaces';
import DynamicController from '../controllers/index.controllers';

const router = express.Router();
const dynamicController = new DynamicController();

collectionNames.forEach((collection: string) => {
  console.log(`/${collection}`);
    // @ts-ignore
    router.get(`/${collection}`, dynamicController[`getAll${collection}`]);
    // @ts-ignore
    router.get(`/${collection}/:ids`, dynamicController[`getByIds${collection}`]);
});


export = router;