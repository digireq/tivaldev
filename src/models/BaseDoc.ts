import { db } from 'src';

export interface IHasCrud {
  collectionRef: string;
  docRef: string;
  create();
  get();
  save();
  delete();
}

export class BaseDoc {

  id: string;
  collectionRef: string;
  docRef: string;

  constructor(docRef) {
    this.docRef = docRef;
  }

  async create() {
    await db.doc(this.docRef).set(Object.assign({}, this));
    return this.docRef;
  }

  async get() {
    const doc = await db.doc(this.docRef).get();
    return doc.data();
  }
}