import { useContext } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { ContatosPage, DashboardPage, EmailsPage, WriteNowPage } from 'pages';
import Home from 'pages/Home';
import PrivateRoute from 'routes/PrivateRoute';
import { AuthContext, useAuth }  from 'contexts/AuthContext';
import { LoginPage } from 'pages/LoginPage';

export function AppRoutes() {

  const authContext = useContext(AuthContext);
  const { user } =   authContext;

  return (
    <BrowserRouter>
      <Routes>
      <PrivateRoute path="/" element={<LoginPage />} isPrivate={!!user} />
        <PrivateRoute path="/home" element={<Home user={user} />} isPrivate={!!user} />
        <PrivateRoute path="/dashboard" element={<DashboardPage />} isPrivate={!!user} />
        <PrivateRoute path="/contatos" element={<ContatosPage />} isPrivate={!!user} />
        <PrivateRoute path="/emails" element={<EmailsPage />} isPrivate={!!user} />
        <PrivateRoute path="/escrever-agora" element={<WriteNowPage />} isPrivate={!!user} />
      </Routes>
    </BrowserRouter>
  );
}
