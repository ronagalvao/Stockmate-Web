import React from 'react';
import { IUser } from 'interfaces';

interface Props {
  user: IUser | null;
}

const Home: React.FC<Props> = ({ user }) => {
  return (
    <>
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mt-10 mb-5">Bem-vindo, {user?.displayName}!</h1>
    </div>
    </>
  );
};

export default Home;
