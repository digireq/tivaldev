import { BaseDoc } from 'src/models/BaseDoc';
import { db } from 'src';
import { ISubCategory } from '../SubCategory/ISubCategory';
import { IOption } from '../Option/IOption';

export class SubCategoryModel extends BaseDoc implements ISubCategory {
  name: string;
  get: () => Promise<ISubCategory>;

  constructor(docRef) {
    super(docRef);
  }

  async getOptions(): Promise<IOption[]> {
    const collection = await db.collection(`${this.docRef}/options`).get();
    return await collection.docs.map(doc => {
      return doc.data() as IOption
    });
  }
}