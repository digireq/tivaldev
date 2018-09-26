import { BaseDoc, IHasCrud } from 'src/models/BaseDoc';
import { firestore } from 'firebase';
import { IProject } from 'src/models/Project/IProject';
import { db } from 'src';
import { ICategory } from '../Category/ICategory';



export class ProjectModel extends BaseDoc {
  name: string;
  deadline: firestore.Timestamp;
  
  constructor(docRef) {
    super(docRef);
  }

  async getCategories(): Promise<ICategory[]> {
    const collection = await db.collection(`${this.docRef}/categories`).get();
    return await collection.docs.map(doc => {
      return doc.data() as ICategory
    });
  }
}