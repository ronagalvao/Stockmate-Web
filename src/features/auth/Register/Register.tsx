import Input from 'components/Input/Input';
import React, { useState } from 'react';

interface RegisterProps {
  setAuthState: React.Dispatch<React.SetStateAction<string>>;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

const Register: React.FC<RegisterProps> = ({ setAuthState, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await fakeRegister(email, password);
      setUser(email);
      setAuthState('home');
    } catch (error) {
      console.error(error);
    }
  };

  const fakeRegister = (email: string, password: string) =>
    new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (email && password) {
          resolve();
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register a new account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleRegister}>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              label="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              id="password"
              type="password"
              autoComplete="current-password"
              label="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
