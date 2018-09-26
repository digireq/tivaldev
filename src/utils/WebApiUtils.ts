// import { ICategory } from '../models/Category/ICategory';
import { db } from 'src';

export const getAllCategories = async (): Promise<any> => {
  const collection = await db.collection("categories").get();
  return await collection.docs.map(doc => {
    return {id: doc.id, ...doc.data()}
  });
}

export const getCategory = async (id: string): Promise<any> => {
  const doc = await db.collection("categories").doc(id).get();
  return await doc.data() as any;
}


// Project settings
// await db.doc("projects/mrIGFK112NmhXlWIBQhn").get();
// OR
// await db.collection("projects").doc("mrIGFK112NmhXlWIBQhn").get();

// Get instance from path
// await db.doc("projects/mrIGFK112NmhXlWIBQhn/categories/ikhH9RjE3odWe8I1eWNB").get();