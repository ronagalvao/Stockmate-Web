import React from 'react';
import { Link } from 'react-router-dom';
import Input from 'components/Input/Input';

type LoginProps = {
  setAuthState: React.Dispatch<React.SetStateAction<string>>;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};

const Login: React.FC<LoginProps> = ({ setAuthState, setUser }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setUser(email);
        setAuthState('home');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-bold mb-5">Login</h1>
      <form onSubmit={handleFormSubmit} className="flex flex-col items-center">
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={handleEmailChange}
          required label={''}        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={handlePasswordChange}
          required label={''}        />
        <button
          type="submit"
          className="py-2 px-5 rounded-lg bg-blue-500 text-white mt-5"
        >
          Entrar
        </button>
      </form>
      <p className="text-red-500 mt-5">{error}</p>
      <p className="mt-5">
        Não tem uma conta?{' '}
        <Link to="/register" className="text-blue-500">
          Cadastrar-se
        </Link>
      </p>
    </div>
  );
};

export default Login;
