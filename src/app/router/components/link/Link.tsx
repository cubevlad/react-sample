import { type LinkProps } from './types';
import { type MouseEvent } from 'react';

export const Link = ({ children, to }: LinkProps) => {
  const handlePreventReload = (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    window.history.pushState({}, '', to);
    const navigationEvent = new PopStateEvent('navigate');
    window.dispatchEvent(navigationEvent);
  };

  return (
    <a href={to} onClick={handlePreventReload}>
      {children}
    </a>
  );
};
