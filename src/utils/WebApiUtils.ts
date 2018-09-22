import { db } from "src/Root";
import { ICategory } from 'src/types/ICategory';

// Get all categories
export const getAllCategories = async (): Promise<ICategory|any> => {
  const collectionRef = db.collection("categories");
  const collection = await collectionRef.get();
  return await collection.docs.map(doc => {
    return {id: doc.id, ...doc.data()}
  });
}

export const getCategory = async (id: string): Promise<ICategory|any> => {
  const docRef = db.collection("categories").doc(id);
  const doc = await docRef.get();
  return await doc.data();
}