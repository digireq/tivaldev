import { BaseDoc, IHasCrud } from 'src/models/BaseDoc';
import { firestore } from 'firebase';
import { IProject } from 'src/models/Project/IProject';
import { db } from 'src';
import { ICategory } from '../Category/ICategory';

type CategoriesType = {
  get: () => Promise<ICategory[]>;
}

export class ProjectModel extends BaseDoc {
  name: string;
  deadline: firestore.Timestamp;
  categories: CategoriesType
  
  constructor(docRef) {
    super(docRef);
    this.categories = {get: () => this.getCategories()}
  }

  async getCategories(): Promise<ICategory[]> {
    const collection = await db.collection(`${this.docRef}/categories`).get();
    return await collection.docs.map(doc => {
      return doc.data() as ICategory
    });
  }
}