import express from 'express';
import { collectionNames } from '../interfaces/interfaces';
import DynamicController from '../controllers/index.controllers';

const router = express.Router();
const dynamicController = new DynamicController();

collectionNames.forEach((collection: string) => {
  console.log(dynamicController[`getAll${collection}`]);
  console.log(`/${collection}`);
    // @ts-ignore
    router.get(`/${collection}`, dynamicController[`getAll${collection}`]);
    // this.router.get(`/${collection}/search`, this.dynamicController[`getByName${collection}`]);
    // this.router.get(`/${collection}/:id`, this.dynamicController[`getById${getById}`]);
});


export = router;