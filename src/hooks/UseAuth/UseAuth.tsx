import { useEffect, useState } from 'react';
import { auth } from 'services/AuthService';
import { IUser } from 'interfaces/IUser';

export const useAuth = () => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        setUser({
          uid: authUser.uid,
          email: authUser.email ?? '', 
          displayName: authUser.displayName ?? '',
          photoURL: authUser.photoURL ?? '',
        });
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return user;
};
