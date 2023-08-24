import { Request, Response } from 'express';
import fs from 'fs';
import { collectionNames } from '../interfaces/interfaces';

class DynamicController {
  [key: string]: Function;

  constructor() {
    this.initDynamicControllers();
  }

  initDynamicControllers(): void {
    collectionNames.forEach((collection: string) => {
      const data: any[] = JSON.parse(fs.readFileSync(require.resolve(`../data/${collection}.json`), 'utf8'));
      this.createGetAll(collection, data);
      this.createGetByIds(collection, data);
    })
  }

  private createGetAll(collection: string, data: any[]) {
    this[`getAll${collection}`] = (req: Request, res: Response) => {
      const page = Number(req.query.page as string) || 1;
      const limit = Number(req.query.limit as string) || 20;
      const name = (req.query.name as string || '').toLowerCase();
  

      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      let result = [];

      if (name) {
        result = data.filter( _ => _.name.toLowerCase().includes(name)).slice(startIndex, endIndex);
      } else {
        result = data.slice(startIndex, endIndex);
      }
  
      return res.json({
        [collection]: result,
        currentPage: page,
        pageSize: limit,
        total: name ? result.length : data.length,
      });
    }
  };
  
  private createGetByIds(collection: string, data: any[]) {
    this[`getByIds${collection}`] = (req: Request, res: Response) => {
      const ids = req.params.ids?.split(',');

      if (!ids.length) {
        return res.status(400).send(`At least one id is required`);
      }

      const result = ids.length === 1 ? data.find( _ => _.id == ids[0]) : data.filter( _ => ids.includes(_.id.toString()));

      if (!result) {
        return res.status(404).send(`${collection} with ids '${ids}' not found`);
      }
      return res.json(result);
    };
  }
}

export default DynamicController;