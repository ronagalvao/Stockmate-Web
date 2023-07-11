import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from 'services/AuthService';
import { IUser } from 'interfaces/IUser';

type AuthContextType = {
  user: IUser | null;
};

const AuthContext = createContext<AuthContextType>({ user: null });

export const useAuth = () => {
  return useContext(AuthContext);
};

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
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

  const value = { user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};