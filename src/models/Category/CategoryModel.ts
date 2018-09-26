import { BaseDoc, IHasCrud } from 'src/models/BaseDoc';
import { db } from 'src';
import { ICategory } from './ICategory';
import { ISubCategory } from '../SubCategory/ISubCategory';

export class CategoryModel extends BaseDoc implements ICategory {
  name: string;
  get: () => Promise<ICategory>;

  constructor(docRef) {
    super(docRef);
  }

  async getSubCategories(): Promise<ISubCategory[]> {
    const collection = await db.collection(`${this.docRef}/subcategories`).get();
    return await collection.docs.map(doc => {
      return doc.data() as ISubCategory
    });
  }
}