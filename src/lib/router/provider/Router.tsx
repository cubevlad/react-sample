import { type ReactElement, createContext, useContext, useEffect, useState } from 'react';

type RouterContextValue = {
  path: string;
};

type RouterProviderProps = {
  children: ReactElement;
};

const RouterContext = createContext<RouterContextValue>({ path: '' });
export const useLocation = () => useContext(RouterContext);

export const RouterProvider = ({ children }: RouterProviderProps) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('navigate', handleLocationChange);
    return () => {
      window.removeEventListener('navigate', handleLocationChange);
    };
  }, []);

  return <RouterContext.Provider value={{ path: currentPath }}>{children}</RouterContext.Provider>;
};
