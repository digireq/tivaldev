import { firestore } from "firebase";

export type IProject = {
  name?: string;
  deadline: Date;
}