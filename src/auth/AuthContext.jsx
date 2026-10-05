import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const savedUser = sessionStorage.getItem('loggedInUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (user) => {
    setLoggedInUser(user);
    sessionStorage.setItem('loggedInUser', JSON.stringify(user));
  };

  const logout = () => {
    setLoggedInUser(null);
    sessionStorage.removeItem('loggedInUser');
  };

  const isAuthenticated = Boolean(loggedInUser);

  return (
    <AuthContext.Provider
      value={{
        loggedInUser,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }

  return context;
};