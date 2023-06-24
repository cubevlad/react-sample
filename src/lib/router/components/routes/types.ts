import { type ReactNode } from 'react';

export type RoutesProps = {
  children?: ReactNode;
  location?: Partial<Location> | string;
};
