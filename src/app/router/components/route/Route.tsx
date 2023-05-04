import type { RouteProps } from './types';
import { useState, useEffect } from 'react';

export const Route = ({ component, path, caseSensitive, exact, id }: RouteProps) => {
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

  return currentPath === path ? component() : null;
};
