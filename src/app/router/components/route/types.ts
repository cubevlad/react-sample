import type { ReactNode } from 'react';

export type RouteProps = {
  component: () => JSX.Element | null;
  caseSensitive?: boolean;
  path?: string;
  id?: string;
  exact?: boolean;
};
