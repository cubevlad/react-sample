import { type ReactNode } from 'react';

type Relative = 'route' | 'path';

export type LinkProps = {
  reloadDocument?: boolean;
  replace?: boolean;
  state?: any;
  preventScrollReset?: boolean;
  relative?: Relative;
  to: string;
  children: ReactNode | null;
};
