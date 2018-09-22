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