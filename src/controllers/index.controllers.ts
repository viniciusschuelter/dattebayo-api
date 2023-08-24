import { Request, Response } from 'express';
import fs from 'fs';
import { DynamicControllerInterface, collectionNames } from '../interfaces/interfaces';

class DynamicController {
  [key: string]: Function;
  constructor() {
    this.initDynamicControllers();
  }

  initDynamicControllers(): void {
    
    collectionNames.forEach((collection: string) => {
      const data: any[] = JSON.parse(fs.readFileSync(require.resolve(`../data/${collection}.json`), 'utf8'));
      this.createGetAll(collection, data);
    })
  }

  private createGetAll(collection: string, data: any[]) {
    this[`getAll${collection}`] = (req: Request, res: Response) => {
      const page = req.query.page || 1;
      const limit = req.query.limit || 20;
  
      // @ts-ignore
      const startIndex = (page - 1) * limit;
      // @ts-ignore
      const endIndex = page * limit;
  
      const charactersToReturn = data.slice(startIndex, endIndex);
  
      return res.json({
        characters: charactersToReturn,
        currentPage: page,
        pageSize: limit,
        totalCharacters: data.length,
      });
    }
  };

  // public getAll = (req: Request, res: Response) => {
  //   return res.json({});
  // }

  // public getById = (req: Request, res: Response) => {
  //   const id = req.params.id;

  //   if (!id) {
  //     return res.status(400).send(`Id parameter is required`);
  //   }

  //   const character = this.characters.find(char => char.id == id);
  //   if (!character) {
  //     return res.status(404).send(`Character with id '${id}' not found`);
  //   }
  //   return res.json(character);
  // };

  // public getByName = (req: Request, res: Response) => {
  //   const name = req.query.name;

  //   if (!name) {
  //     return res.status(400).send(`Name query parameter is required`);
  //   }

  //   const character = this.characters.find(char => char.name.toLowerCase() === name.toLowerCase());
  //   if (!character) {
  //     return res.status(404).send(`Character with name '${name}' not found`);
  //   }
  //   return res.json(character);
  // };
}

export default DynamicController;