import { UserSession } from '@/Auth/interfaces/userSession';
import { createContext, useState } from 'react';

interface Children {
  children: React.ReactNode;
}

const InitialUserSession: UserSession = {
  email: '',
  name: '',
  phone: '',
  isLogged: false,
};

interface SessionState {
  session: UserSession;
  login: (userSession: UserSession) => void;
  logout: () => void;
}

const InitialState = {
  session: InitialUserSession,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: (_userSession: UserSession) => {},
  logout: () => {},
};

export const AuthContext = createContext<SessionState>(InitialState);

export default function AuthContextProvider({ children }: Children) {
  const [session, setSession] = useState<UserSession>(InitialUserSession);

  function login(userSession: UserSession) {
    setSession(userSession);
  }

  function logout() {
    window.localStorage.removeItem('token');
    setSession({ ...InitialUserSession });
  }

  return (
    <AuthContext.Provider
      value={{
        session,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
