import { createContext, useContext, useState } from "react";
import { User, UserContextType } from "./interfaces/User";

// Criação do userContext. Inicialmente é null pois nenhum user está logado.
export const UserContext = createContext<UserContextType | null>(null);

// Hook personalizado para acessarmos facilmente o UserContext.
export const useUser = (): UserContextType => {
  const hasContext = useContext(UserContext);
  if (hasContext) return hasContext;

  throw new Error("Sem context");
};

// Componente que libera o contexto para envolvermos toda a aplicação.
export const UserProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userInfo: User) => {
    setUser(userInfo);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
