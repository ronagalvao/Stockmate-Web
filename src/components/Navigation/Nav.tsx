import { Button, HamburgerIcon, NavLogo, NavMobileItem } from 'components';
import { useNavMobileContext } from 'contexts';
import { Link } from 'react-router-dom';
import { auth } from 'services/AuthService';

type NavigationProps = {
  user: string | null;
  setAuthState: (authState: string) => void;
  setUser: (user: string | null) => void;
};

const Navigation: React.FC<NavigationProps> = ({
  user,
  setAuthState,
  setUser,
}) => {
  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
        setAuthState('login');
      })
      .catch((error: Error) => console.error(error));
  };

  const { isVisible, setIsVisible } = useNavMobileContext();
  return (
    <nav className="w-full h-20 bg-gray-50 border-b border-gray-200">
      <div className="w-full h-full max-w-7xl m-auto flex items-center justify-between px-4">
        <NavLogo />

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/dashboard">
            <Button>Dashboard</Button>
          </Link>
          <Link to="/contatos">
            <Button>Contatos</Button>
          </Link>
          <Link to="/emails">
            <Button>E-mails</Button>
          </Link>
          <Link to="/escrever-agora">
            <Button variant="primary">Escrever Agora</Button>
          </Link>
          <Link to="/login">
            <Button variant="primary" onClick={handleLogout}>
              Sair
            </Button>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button onClick={() => setIsVisible((prev) => !prev)}>
            {isVisible ? (
              <span className="font-bold text-2xl">X</span>
            ) : (
              <HamburgerIcon />
            )}
          </Button>
        </div>
      </div>
      {isVisible && (
        <div className="w-full h-[calc(100vh-81px)] fixed top-20 left-0 bg-white">
          <div className="flex flex-col items-stretch justify-center">
            <NavMobileItem to="/dashboard">Dashboard</NavMobileItem>
            <NavMobileItem to="/contatos">Contatos</NavMobileItem>
            <NavMobileItem to="/emails">E-mails</NavMobileItem>
            <NavMobileItem to="/escrever-agora" variant="primary">
              Escrever Agora
            </NavMobileItem>
            <NavMobileItem to="/login" variant="primary">
              Sair
            </NavMobileItem>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
