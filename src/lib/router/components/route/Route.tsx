import { useLocation } from '../../provider';
import type { RouteProps } from './types';
import { useState, useEffect } from 'react';

export const Route = ({ component, path }: RouteProps) => {
  const { path: currentPath } = useLocation();

  return currentPath === path ? component() : null;
};
