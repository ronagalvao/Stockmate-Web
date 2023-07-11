import { auth } from './firebase';
import * as authUser from 'firebase/auth';

export const signInWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<void> => {
  try {
    await authUser.signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    if (typeof error === "string") {
      throw new Error(error);
    }
    throw error;
  }
};

export const createUserWithEmailAndPassword = async (
  email: string,
  password: string
): Promise<void> => {
  try {
    await createUserWithEmailAndPassword(email, password);
  } catch (error) {
    if (typeof error === "string") {
      throw new Error(error);
    }
    throw error;
  }
};

export const signOut = async (): Promise<void> => {
  try {
    await auth.signOut();
  } catch (error) {
    if (typeof error === "string") {
      throw new Error(error);
    }
    throw error;
  }
};
