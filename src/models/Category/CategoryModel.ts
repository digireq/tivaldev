import { BaseDoc, IHasCrud } from 'src/models/BaseDoc';
import { firestore } from 'firebase';
import { IProject } from 'src/models/Project/IProject';
import { db } from 'src';
import { ICategory } from './ICategory';


export class CategoryModel extends BaseDoc implements ICategory {
  name: string;
}